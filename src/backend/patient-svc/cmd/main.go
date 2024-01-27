package main

import (
	"fmt"
	"log"
	"net"

	"github.com/EdoRguez/medical-system/patient-svc/pkg/config"
	"github.com/EdoRguez/medical-system/patient-svc/pkg/db"
	"github.com/EdoRguez/medical-system/patient-svc/pkg/pb"
	"github.com/EdoRguez/medical-system/patient-svc/pkg/services"
	"google.golang.org/grpc"
)

func main() {
	c, err := config.LoadConfig()

	if err != nil {
		log.Fatalln("Failed at config", err)
	}

	h := db.Init(c.DBSource)

	lis, err := net.Listen("tcp", c.Port)

	if err != nil {
		log.Fatalln("Failed to listing:", err)
	}

	fmt.Println("Patient Svc on", c.Port)

	s := services.Server{
		H: h,
	}

	grpcServer := grpc.NewServer()

	pb.RegisterPatientServiceServer(grpcServer, &s)

	if err := grpcServer.Serve(lis); err != nil {
		log.Fatalln("Failed to serve:", err)
	}
}
