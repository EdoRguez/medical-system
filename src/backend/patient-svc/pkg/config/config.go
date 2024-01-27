package config

import "github.com/spf13/viper"

type Config struct {
	Environment        string `mapstructure:"ENVIRONMENT"`
	Port               string `mapstructure:"PORT"`
	DBDriver           string `mapstructure:"DB_DRIVER"`
	DBSource           string `mapstructure:"DB_SOURCE"`
	SCHEDULING_SVC_URL string `mapstructure:"SCHEDULING_SVC_URL"`
}

func LoadConfig() (config Config, err error) {
	viper.AddConfigPath(".")
	viper.SetConfigType("env")

	viper.AutomaticEnv()

	err = viper.ReadInConfig()
	if err != nil {
		return
	}

	err = viper.Unmarshal(&config)
	return
}
