package scheduling

import (
	"net/http"

	"github.com/gorilla/mux"
)

func LoadRoutes(router *mux.Router) {
	baseRoute := router.PathPrefix("/scheduling").Subrouter()

	getRouter := baseRoute.Methods(http.MethodGet).Subrouter()
	getRouter.HandleFunc("", func(w http.ResponseWriter, r *http.Request) {})
}
