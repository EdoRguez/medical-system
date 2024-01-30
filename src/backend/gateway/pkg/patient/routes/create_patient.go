package routes

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/EdoRguez/medical-system/gateway/pkg/patient/pb"
)

type CreatePatientRequestBody struct {
	FirstName string `json:"firstName"`
	LastName  string `json:"lastName"`
}

func CreatePatient(w http.ResponseWriter, r *http.Request, c pb.PatientServiceClient) {
	fmt.Println("API Gateway :  Create Patient")
	var body CreatePatientRequestBody

	if err := json.NewDecoder(r.Body).Decode(&body); err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	fmt.Println("api gateway")
	fmt.Println(body)
	fmt.Println("-----------------")

	createPatientParams := &pb.CreatePatientRequest{
		FirstName: body.FirstName,
		LastName:  body.LastName,
	}

	_, err := c.CreatePatient(r.Context(), createPatientParams)

	if err != nil {
		http.Error(w, "There is an error", http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusCreated)
}
