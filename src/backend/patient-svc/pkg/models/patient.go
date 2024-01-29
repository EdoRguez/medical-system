package models

import "time"

type Patient struct {
	Id        int64     `json:"id" gorm:"primaryKey"`
	FirstName string    `json:"firstName" gorm:"not null;size:30"`
	LastName  string    `json:"lastName" gorm:"not null;size:30"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}
