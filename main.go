package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"

	"google.golang.org/genai"
)

type chatRequest struct {
	Text struct {
		Input string `json:"input"`
	} `json:"text"`
}

type chatResponse struct {
	Summary string `json:"summary"`
}

func main() {
	geminiAPIKey, exists := os.LookupEnv("GEMINI_API_KEY")
	if !exists {
		log.Fatal("No GEMINI_API_KEY environment variable found")
	}

	ctx := context.Background()
	client, err := genai.NewClient(ctx, &genai.ClientConfig{
		APIKey:  geminiAPIKey,
		Backend: genai.BackendGeminiAPI,
	})
	if err != nil {
		log.Fatal(err)
	}

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Hello, world!")
	})

	http.HandleFunc("/chat", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
		w.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")

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

		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(chatResponse{Summary: result.Text()})
	})

	port := ":8080"
	fmt.Println("Server listening on", port)
	log.Fatal(http.ListenAndServe(port, nil))
}
