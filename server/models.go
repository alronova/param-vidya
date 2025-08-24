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
	Sutras    []Sutra            `bson:"sutras" json:"sutras"`
	CreatedAt time.Time          `bson:"created_at" json:"createdAt"`
	UpdatedAt time.Time          `bson:"updated_at" json:"updatedAt"`
}

// SignupRequest Model
type SignupRequest struct {
	FirstName string `json:"firstName"`
	LastName  string `json:"lastName"`
	Email     string `json:"email"`
	UserName  string `json:"userName"`
	Password  string `json:"password"`
}

// LoginRequest Model
type LoginRequest struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

type LoginResponse struct {
	User  User   `json:"user"`
	Token string `json:"token"`
}

// ErrorResponse Model
type ErrorResponse struct {
	Error   string `json:"error"`
	Message string `json:"message"`
}

// SuccessResponse Model
type SuccessResponse struct {
	Message string      `json:"message"`
	Data    interface{} `json:"data"`
}

// Verse Model
type Verse struct {
	Subtitle    string `json:"subtitle"`
	Description string `json:"description"`
}

type Patha struct {
	Title 	string 	`json:"title"`
	Content []Verse `json:"content"`
	Status 	bool 	`json:"status"`
}

// Option Model
type Option struct {
	Char string `json:"char"`
	Text string `json:"text"`
}

type Quiz struct {
	Question string 	`json:"question"`
	Options []Option 	`json:"options"`
	Status 	bool 		`json:"status"`
}

type Chars struct {
	X_Pos      int    `json:"x_pos"`
	Y_Pos      int    `json:"y_pos"`
	Letter     string `json:"letter"`
	Visibility bool   `json:"visibility"`
}

type CWord struct {
	Chars []Chars `json:"chars"`
	Orient 	string 	`json:"orient"`
	Word  string  `json:"word"`
}

type Crossword struct {
	C_Words []CWord	`json:"c_word"`
	Status 	bool 	`json:"status"`
}

type FillUp struct {
	Sentence string `json:"sentence"`
	Blank_At int 	`json:"blank_at"`
	Answer 	 string `json:"answer"`
	Status 	bool 	`json:"status"`
}

type S_Word struct {
	ID 		string 		`json:"s_word_id"`
	Text 	string 		`json:"text"`
	Posn 	int 		`json:"posn"`
}

type Translate struct {
	Sentence string 	`json:"sentence"`
	Words 	[]S_Word 	`json:"words"`
	Order 	[]string 	`json:"order"`
	Status 	bool 		`json:"status"`
}

type Sutra struct {
	Level 	int 		`json:"level"`
	Quizzes []Quiz 		`json:"quizzes"`
	Crossword Crossword `json:"crossword"`
	FillUps	[]FillUp 	`json:"fillUps"`
	Status 	bool 		`json:"status"`
}