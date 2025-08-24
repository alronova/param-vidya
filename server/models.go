package main

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

// User Model
type User struct {
	ID        primitive.ObjectID `bson:"_id,omitempty" json:"id"`
	Email     string             `json:"email"`
	Password  string             `json:"password"`
	FirstName string             `json:"firstName"`
	LastName  string             `json:"lastName"`
	UserName  string             `json:"userName"`
	Punyas    int                `json:"punyas"`
	Vasus     int                `json:"vasus"`
	CreatedAt time.Time          `json:"createdAt"`
	UpdatedAt time.Time          `json:"updatedAt"`
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

// Patha Model
type Patha struct {
	Title   string  `json:"title"`
	Content []Verse `json:"content"`
	MinVasu int     `json:"minVasu"`
}

// Sutra Model
type Sutra struct {
	Quizes     []Quiz      `json:"quizes"`
	FillIts    []FillIt    `json:"fillIts"`
	Translates []Translate `json:"translates"`
	MinVasu    int         `json:"minVasu"`
}

// Verse Model
type Verse struct {
	Subtitle    string `json:"subtitle"`
	Description string `json:"description"`
}

// Quiz Model
type Quiz struct {
	Question string   `json:"question"`
	Options  []Option `json:"options"`
}

// Option Model
type Option struct {
	Char string `json:"char"`
	Text string `json:"text"`
}

// FillIt Model
type FillIt struct {
	Sentence string `json:"sentence"`
	Answer   string `json:"answer"`
}

// Translate Model
type Translate struct {
	Sentence string   `json:"sentence"`
	Blocks   []string `json:"blocks"`
}

type Chars struct {
	X_Pos      int    `json:"x_pos"`
	Y_Pos      int    `json:"y_pos"`
	Letter     string `json:"letter"`
	Visibility bool   `json:"visibility"`
}

type CWord struct {
	Chars []Chars `json:"chars"`
	Word  string  `json:"word"`
}

type Crossword struct {
	C_Word CWord  `json:"c_word"`
	Orient string `json:"orient"`
}
