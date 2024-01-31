package patient

import (
	"fmt"

	"github.com/EdoRguez/medical-system/gateway/pkg/config"
	"github.com/EdoRguez/medical-system/gateway/pkg/patient/pb"
	"google.golang.org/grpc"
)

type ServiceClient struct {
	Client pb.PatientServiceClient
}

func InitServiceClient(c *config.Config) pb.PatientServiceClient {
	fmt.Println("API Gateway :  InitServiceClient")
	// using WithInsecure() because no SSL running
	cc, err := grpc.Dial(c.Patient_Svc_Url, grpc.WithInsecure())

	if err != nil {
		fmt.Println("Could not connect:", err)
	}

	return pb.NewPatientServiceClient(cc)
}
