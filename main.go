package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
)

func main() {
	GEMINI_API_KEY, exists := os.LookupEnv("GEMINI_API_KEY")
	if !exists {
		log.Fatal("No GEMINI_API_KEY environment variable found")
	}
	fmt.Println(GEMINI_API_KEY)

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Hello, world!")
	})

	var port string = ":8080"
	fmt.Println("Server listening on ", port)
	http.ListenAndServe(port, nil)
}
