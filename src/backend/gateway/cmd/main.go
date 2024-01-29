package main

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/EdoRguez/medical-system/gateway/pkg/config"
	"github.com/EdoRguez/medical-system/gateway/pkg/patient"
	"github.com/EdoRguez/medical-system/gateway/pkg/scheduling"
	"github.com/gorilla/mux"
)

func main() {
	var exitCode int
	defer func() {
		os.Exit(exitCode)
	}()

	// load config
	env, err := config.LoadConfig(".")
	if err != nil {
		fmt.Printf("error: %v", err)
		exitCode = 1
		return
	}

	// run the server
	err = startServer(env.HTTPServerAddress)
	if err != nil {
		log.Fatal("Cannot start server: ", err)
	}
}

func startServer(address string) error {
	sm := mux.NewRouter()

	baseRoute := sm.PathPrefix("/api").Subrouter()

	scheduling.LoadRoutes(baseRoute)
	patient.LoadRoutes(baseRoute)

	s := &http.Server{
		Addr:         address,
		Handler:      sm,
		IdleTimeout:  120 * time.Second,
		ReadTimeout:  1 * time.Second,
		WriteTimeout: 1 * time.Second,
	}

	go func() {
		fmt.Println("Starting server on: ", address)

		err := s.ListenAndServe()
		if err != nil {
			fmt.Printf("Error starting server: %s\n", err)
			os.Exit(1)
		}
	}()

	// trap sigterm or interupt and gracefully shutdown the server
	c := make(chan os.Signal, 1)
	signal.Notify(c, os.Interrupt, syscall.SIGTERM)

	// Block until a signal is received.
	sig := <-c
	log.Println("Got signal:", sig)

	// gracefully shutdown the server, waiting max 30 seconds for current operations to complete
	ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
	defer cancel()
	s.Shutdown(ctx)
	return nil
}
