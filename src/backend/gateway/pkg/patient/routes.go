package patient

import (
	"fmt"
	"net/http"

	"github.com/EdoRguez/medical-system/gateway/pkg/config"
	"github.com/EdoRguez/medical-system/gateway/pkg/patient/routes"
	"github.com/gorilla/mux"
)

func LoadRoutes(router *mux.Router, c *config.Config) {
	baseRoute := router.PathPrefix("/patient").Subrouter()

	svc := &ServiceClient{
		Client: InitServiceClient(c),
	}

	getRouter := baseRoute.Methods(http.MethodGet).Subrouter()
	getRouter.HandleFunc("", func(w http.ResponseWriter, r *http.Request) {})

	postRouter := baseRoute.Methods(http.MethodPost).Subrouter()
	postRouter.HandleFunc("", svc.CreatePatient)
}

func (svc *ServiceClient) CreatePatient(w http.ResponseWriter, r *http.Request) {
	fmt.Println("API Gateway :  CreatePatient called --> 1")
	routes.CreatePatient(w, r, svc.Client)
}
