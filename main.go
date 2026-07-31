package main

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
	"time"

	"github.com/aws/aws-lambda-go/lambda"
	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/config"
	"github.com/aws/aws-sdk-go-v2/service/dynamodb"
	"github.com/aws/aws-sdk-go-v2/service/dynamodb/types"
	"github.com/aws/aws-sdk-go-v2/service/s3"
	"github.com/awslabs/aws-lambda-go-api-proxy/httpadapter"
	"google.golang.org/genai"
)

const timestampLayout = "2006-01-02T15:04:05.000000000Z"

type chatRequest struct {
	SessionID string `json:"session_id"`
	Text      struct {
		Input string `json:"input"`
	} `json:"text"`
}

type chatResponse struct {
	Summary string `json:"summary"`
}

type historyItem struct {
	Input   string `json:"input"`
	Summary string `json:"summary"`
}

type chatStore struct {
	dynamo     *dynamodb.Client
	s3         *s3.Client
	tableName  string
	bucketName string
}

func (s *chatStore) save(ctx context.Context, sessionID, input, summary string) {
	timestamp := time.Now().UTC().Format(timestampLayout)

	item := map[string]types.AttributeValue{
		"session_id": &types.AttributeValueMemberS{Value: sessionID},
		"timestamp":  &types.AttributeValueMemberS{Value: timestamp},
		"input":      &types.AttributeValueMemberS{Value: input},
		"summary":    &types.AttributeValueMemberS{Value: summary},
	}
	if _, err := s.dynamo.PutItem(ctx, &dynamodb.PutItemInput{
		TableName: aws.String(s.tableName),
		Item:      item,
	}); err != nil {
		log.Println("dynamodb put item error:", err)
	}

	archive, err := json.Marshal(historyItem{Input: input, Summary: summary})
	if err != nil {
		log.Println("archive marshal error:", err)
		return
	}
	key := fmt.Sprintf("chats/%s/%s.json", sessionID, timestamp)
	if _, err := s.s3.PutObject(ctx, &s3.PutObjectInput{
		Bucket:      aws.String(s.bucketName),
		Key:         aws.String(key),
		Body:        bytes.NewReader(archive),
		ContentType: aws.String("application/json"),
	}); err != nil {
		log.Println("s3 put object error:", err)
	}
}

func (s *chatStore) history(ctx context.Context, sessionID string) ([]historyItem, error) {
	out, err := s.dynamo.Query(ctx, &dynamodb.QueryInput{
		TableName:              aws.String(s.tableName),
		KeyConditionExpression: aws.String("session_id = :sid"),
		ExpressionAttributeValues: map[string]types.AttributeValue{
			":sid": &types.AttributeValueMemberS{Value: sessionID},
		},
		ScanIndexForward: aws.Bool(true),
	})
	if err != nil {
		return nil, err
	}

	history := make([]historyItem, 0, len(out.Items))
	for _, item := range out.Items {
		entry := historyItem{}
		if v, ok := item["input"].(*types.AttributeValueMemberS); ok {
			entry.Input = v.Value
		}
		if v, ok := item["summary"].(*types.AttributeValueMemberS); ok {
			entry.Summary = v.Value
		}
		history = append(history, entry)
	}
	return history, nil
}

func setCORSHeaders(w http.ResponseWriter, methods string) {
	origin := os.Getenv("ALLOWED_ORIGIN")
	if origin == "" {
		origin = "http://localhost:3000"
	}
	w.Header().Set("Access-Control-Allow-Origin", origin)
	w.Header().Set("Access-Control-Allow-Methods", methods+", OPTIONS")
	w.Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")
}

func main() {
	geminiAPIKey, exists := os.LookupEnv("GEMINI_API_KEY")
	if !exists {
		log.Fatal("No GEMINI_API_KEY environment variable found")
	}
	tableName, exists := os.LookupEnv("DYNAMODB_TABLE_NAME")
	if !exists {
		log.Fatal("No DYNAMODB_TABLE_NAME environment variable found")
	}
	bucketName, exists := os.LookupEnv("S3_BUCKET_NAME")
	if !exists {
		log.Fatal("No S3_BUCKET_NAME environment variable found")
	}

	ctx := context.Background()

	client, err := genai.NewClient(ctx, &genai.ClientConfig{
		APIKey:  geminiAPIKey,
		Backend: genai.BackendGeminiAPI,
	})
	if err != nil {
		log.Fatal(err)
	}

	awsCfg, err := config.LoadDefaultConfig(ctx)
	if err != nil {
		log.Fatal(err)
	}
	store := &chatStore{
		dynamo:     dynamodb.NewFromConfig(awsCfg),
		s3:         s3.NewFromConfig(awsCfg),
		tableName:  tableName,
		bucketName: bucketName,
	}

	mux := http.NewServeMux()

	mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Hello, world!")
	})

	mux.HandleFunc("/chat", func(w http.ResponseWriter, r *http.Request) {
		setCORSHeaders(w, "POST")

		if r.Method == http.MethodOptions {
			w.WriteHeader(http.StatusNoContent)
			return
		}
		if r.Method != http.MethodPost {
			http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
			return
		}

		var req chatRequest
		if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
			http.Error(w, "invalid request body", http.StatusBadRequest)
			return
		}
		if req.Text.Input == "" {
			http.Error(w, "missing input", http.StatusBadRequest)
			return
		}
		if req.SessionID == "" {
			http.Error(w, "missing session_id", http.StatusBadRequest)
			return
		}

		result, err := client.Models.GenerateContent(
			r.Context(),
			"gemini-flash-latest",
			genai.Text(req.Text.Input),
			nil,
		)
		if err != nil {
			log.Println("gemini generate content error:", err)
			http.Error(w, "failed to generate content", http.StatusInternalServerError)
			return
		}
		summary := result.Text()

		store.save(r.Context(), req.SessionID, req.Text.Input, summary)

		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(chatResponse{Summary: summary})
	})

	mux.HandleFunc("/history", func(w http.ResponseWriter, r *http.Request) {
		setCORSHeaders(w, "GET")

		if r.Method == http.MethodOptions {
			w.WriteHeader(http.StatusNoContent)
			return
		}
		if r.Method != http.MethodGet {
			http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
			return
		}

		sessionID := r.URL.Query().Get("session_id")
		if sessionID == "" {
			http.Error(w, "missing session_id", http.StatusBadRequest)
			return
		}

		history, err := store.history(r.Context(), sessionID)
		if err != nil {
			log.Println("dynamodb query error:", err)
			http.Error(w, "failed to load history", http.StatusInternalServerError)
			return
		}

		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(history)
	})

	if os.Getenv("AWS_LAMBDA_FUNCTION_NAME") != "" {
		adapter := httpadapter.NewV2(mux)
		lambda.Start(adapter.ProxyWithContext)
		return
	}

	port := ":8080"
	fmt.Println("Server listening on", port)
	log.Fatal(http.ListenAndServe(port, mux))
}
