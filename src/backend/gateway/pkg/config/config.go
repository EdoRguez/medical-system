package config

import "github.com/spf13/viper"

type Config struct {
	Environment     string `mapstructure:"ENVIRONMENT"`
	Gateway_Url     string `mapstructure:"GATEWAY_URL"`
	Patient_Svc_Url string `mapstructure:"PATIENT_SVC_URL"`
}

func LoadConfig() (config Config, err error) {
	viper.AddConfigPath(".")
	viper.SetConfigName("app")
	viper.SetConfigType("env")

	viper.AutomaticEnv()

	err = viper.ReadInConfig()
	if err != nil {
		return
	}

	err = viper.Unmarshal(&config)
	return
}
