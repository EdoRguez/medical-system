package main

import (
	"fmt"
	"log"
	"os"

	"github.com/EdoRguez/medical-system/gateway/pkg/config"
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
	err = server.Start(env.HTTPServerAddress)
	if err != nil {
		log.Fatal("Cannot start server: ", err)
	}
}
