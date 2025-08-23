package main

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

// User Model
type User struct {
	ID        primitive.ObjectID `bson:"_id,omitempty" json:"id"`
	Email     string             `bson:"email" json:"email" binding:"required,email"`
	Password  string             `bson:"password" json:"password"`
	FirstName string             `bson:"first_name" json:"firstName"`
	LastName  string             `bson:"last_name" json:"lastName"`
	UserName  string             `bson:"user_name" json:"userName"`
	Punyas    int           	 `bson:"punyas" json:"punyas"`
	Vasus     int           	 `bson:"vasus" json:"vasus"`
	CreatedAt time.Time          `bson:"created_at" json:"createdAt"`
	UpdatedAt time.Time          `bson:"updated_at" json:"updatedAt"`
}

// SignUp Request Model
type SignupRequest struct {
	FirstName string `json:"firstName" binding:"required"`
	LastName  string `json:"lastName" binding:"required"`
	Email     string `json:"email" binding:"required,email"`
	UserName  string `json:"userName" binding:"required"`
	Password  string `json:"password" binding:"required,min=6"`
}

// Login Request Model
type LoginRequest struct {
	Email    string `json:"email" binding:"required,email"`
	Password string `json:"password" binding:"required"`
}

// Login Response Model
type LoginResponse struct {
	User  User   `json:"user"`
	Token string `json:"token"`
}

// General Response Models
type ErrorResponse struct {
	Error   string `json:"error"`
	Message string `json:"message,omitempty"`
}

type SuccessResponse struct {
	Message string      `json:"message"`
	Data    interface{} `json:"data,omitempty"`
}

type Verse struct {
	Subtitle 	string `json:"subtitle"`
	Description string `json:"description"`
}

type Patha struct {
	Title 	string `json:"title"`
	Content []Verse `json:"content"`
}

type Option struct {
	Char string `json:"char"`
	Text string `json:"text"`
}

type Quiz struct {
	Question string `json:"question"`
	Options []Option `json:"options"`
}

type Chars struct {
	X_Pos 	int 	`json:"x_pos"`
	Y_Pos 	int 	`json:"y_pos"`
	Letter 	string 	`json:"letter"`
	Visibility bool `json:"visibility"`
}

type CWord struct {
	Chars []Chars `json:"chars"`
	Word  string   `json:"word"`
}

type Crossword struct {
	C_Word  CWord 	`json:"c_word"`
	Orient 	string 	`json:"orient"`
}
