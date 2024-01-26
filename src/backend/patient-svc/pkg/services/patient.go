package services

import (
	"context"
	"fmt"
	"net/http"

	"github.com/EdoRguez/medical-system/patient-svc/pkg/db"
	"github.com/EdoRguez/medical-system/patient-svc/pkg/models"
	patient "github.com/EdoRguez/medical-system/patient-svc/pkg/pb"
)

type Server struct {
	H db.Handler
	patient.UnimplementedPatientServiceServer
}

func (s *Server) CreatePatient(ctx context.Context, req *patient.CreatePatientRequest) (*patient.CreatePatientResponse, error) {
	fmt.Println("Patient Service : CreatePatient")
	var patientModel models.Patient
	fmt.Println("repository")
	fmt.Println(req)
	fmt.Println("----------------")
	patientModel.FirstName = req.FirstName
	patientModel.LastName = req.LastName

	if result := s.H.DB.Create(&patientModel); result.Error != nil {
		return &patient.CreatePatientResponse{
			Status: http.StatusConflict,
			Error:  result.Error.Error(),
		}, nil
	}

	return &patient.CreatePatientResponse{
		Status: http.StatusCreated,
		Id:     patientModel.Id,
	}, nil
}
