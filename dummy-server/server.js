const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

const corsOptions = {
  origin: 'http://localhost:5173', // Your frontend's URL
  optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

// Sample JSON data for different endpoints
const sampleHealth = {
  message: "Server is running successfully",
  data: { status: "healthy", timestamp: new Date().toISOString() }
};

const sampleSignupResponse = {
  message: "User registered successfully",
  data: {
    id: "dummyid123",
    email: "dummy@example.com",
    firstName: "Dummy",
    lastName: "User",
    userName: "dummyuser",
    punyas: 0,
    vasus: 0,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
};

const sampleLoginResponse = {
  user: {
    id: "dummyid123",
    email: "dummy@example.com",
    firstName: "Dummy",
    lastName: "User",
    userName: "dummyuser",
    punyas: 0,
    vasus: 0,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  token: "dummytoken"
};

const dashboardData = {
  "id": "66c8b1e7f0c2f52d3d8c7e12",
  "email": "arjuna@example.com",
  "password": "$2a$10$hashed_password",
  "firstName": "Arjuna",
  "lastName": "Pandava",
  "userName": "arjuna_warrior",
  "punyas": 250,
  "vasus": 35,
  "sutras": [
    {
      "level": 1,
      "quizzes": [
        {
          "question": "What does Atman mean?",
          "options": [
            { "char": "A", "text": "Soul" },
            { "char": "B", "text": "Body" },
            { "char": "C", "text": "Mind" },
            { "char": "D", "text": "Wealth" }
          ],
          "status": true
        },
        {
          "question": "Which of these is eternal?",
          "options": [
            { "char": "A", "text": "Soul" },
            { "char": "B", "text": "Wealth" },
            { "char": "C", "text": "Fame" },
            { "char": "D", "text": "Body" }
          ],
          "status": false
        },
        {
          "question": "What is Dharma?",
          "options": [
            { "char": "A", "text": "Duty" },
            { "char": "B", "text": "Anger" },
            { "char": "C", "text": "Attachment" },
            { "char": "D", "text": "Pleasure" }
          ],
          "status": false
        }
      ],
      "crossword": {
        "c_word": [
          {
            "chars": [
              { "x_pos": 0, "y_pos": 0, "letter": "D", "visibility": true },
              { "x_pos": 1, "y_pos": 0, "letter": "H", "visibility": true },
              { "x_pos": 2, "y_pos": 0, "letter": "A", "visibility": true },
              { "x_pos": 3, "y_pos": 0, "letter": "R", "visibility": true },
              { "x_pos": 4, "y_pos": 0, "letter": "M", "visibility": false },
              { "x_pos": 5, "y_pos": 0, "letter": "A", "visibility": false }
            ],
            "word": "DHARMA",
		        "orient": "horizontal",
          },
          {
            "chars": [
              { "x_pos": 0, "y_pos": 1, "letter": "A", "visibility": true },
              { "x_pos": 1, "y_pos": 1, "letter": "T", "visibility": true },
              { "x_pos": 2, "y_pos": 1, "letter": "M", "visibility": false },
              { "x_pos": 3, "y_pos": 1, "letter": "A", "visibility": false },
              { "x_pos": 4, "y_pos": 1, "letter": "N", "visibility": false }
            ],
            "word": "ATMAN",
		        "orient": "horizontal",
          }
        ],
        "status": false
      },
      "fillUps": [
        {
          "sentence": "The ___ is the essence of knowledge.",
          "blank_at": 2,
          "answer": "soul",
          "status": false
        },
        {
          "sentence": "The Gita is a book of ___.",
          "blank_at": 6,
          "answer": "wisdom",
          "status": true
        },
        {
          "sentence": "___ is eternal and indestructible.",
          "blank_at": 1,
          "answer": "Atman",
          "status": false
        }
      ],
      "translates": [
        {
          "sentence": "Atman is eternal.",
          "words": [
            { "s_word_id": "1", "text": "atman", "posn": 3 },
            { "s_word_id": "2", "text": "avinahsi", "posn": 1 },
            { "s_word_id": "2", "text": "asti", "posn": 2 }
          ],
          "order": ["1", "2", "3"],
          "status": false
        },
        {
          "sentence": "Dharma protects those who protect it.",
          "words": [
            { "s_word_id": "1", "text": "dharmaḥ", "posn": 2 },
            { "s_word_id": "2", "text": "rakṣati", "posn": 3 },
            { "s_word_id": "3", "text": "rakṣakaḥ", "posn": 1 }
          ],
          "order": ["1", "2", "3"],
          "status": false
        }
      ],
      "status": true
    },
    {
      "level": 2,
      "quizzes": [
        {
          "question": "Who narrated the Bhagavad Gita?",
          "options": [
            { "char": "A", "text": "Krishna" },
            { "char": "B", "text": "Arjuna" },
            { "char": "C", "text": "Vyasa" },
            { "char": "D", "text": "Hanuman" }
          ],
          "status": true
        },
        {
          "question": "Which battlefield is the Gita set in?",
          "options": [
            { "char": "A", "text": "Kurukshetra" },
            { "char": "B", "text": "Panipat" },
            { "char": "C", "text": "Ayodhya" },
            { "char": "D", "text": "Mathura" }
          ],
          "status": false
        }
      ],
      "crossword": {
        "c_word": [
          {
            "chars": [
              { "x_pos": 0, "y_pos": 0, "letter": "K", "visibility": true },
              { "x_pos": 1, "y_pos": 0, "letter": "R", "visibility": true },
              { "x_pos": 2, "y_pos": 0, "letter": "I", "visibility": true },
              { "x_pos": 3, "y_pos": 0, "letter": "S", "visibility": true },
              { "x_pos": 4, "y_pos": 0, "letter": "H", "visibility": true },
              { "x_pos": 5, "y_pos": 0, "letter": "N", "visibility": false },
              { "x_pos": 6, "y_pos": 0, "letter": "A", "visibility": false }
            ],
            "word": "KRISHNA",
		        "orient": "horizontal",
          },
          {
            "chars": [
              { "x_pos": 0, "y_pos": 1, "letter": "A", "visibility": true },
              { "x_pos": 1, "y_pos": 1, "letter": "R", "visibility": true },
              { "x_pos": 2, "y_pos": 1, "letter": "J", "visibility": true },
              { "x_pos": 3, "y_pos": 1, "letter": "U", "visibility": false },
              { "x_pos": 4, "y_pos": 1, "letter": "N", "visibility": false },
              { "x_pos": 5, "y_pos": 1, "letter": "A", "visibility": false }
            ],
            "word": "ARJUNA",
            "orient": "horizontal",
          }
        ],
        "status": false
      },
      "fillUps": [
        {
          "sentence": "Krishna is the ___ of the Gita.",
          "blank_at": 4,
          "answer": "speaker",
          "status": false
        },
        {
          "sentence": "The battle of ___ was where Gita was spoken.",
          "blank_at": 4,
          "answer": "Kurukshetra",
          "status": false
        }
      ],
      "translates": [
        {
          "sentence": "Krishna guides Arjuna.",
          "words": [
            { "s_word_id": "1", "text": "kṛṣṇaḥ", "posn": 2 },
            { "s_word_id": "2", "text": "anugacchati", "posn": 3 },
            { "s_word_id": "3", "text": "arjunam", "posn": 1 }
          ],
          "order": ["1", "2", "3"],
          "status": false
        }
      ],
      "status": false
    }
  ],
  "createdAt": "2025-08-20T12:34:56Z",
  "updatedAt": "2025-08-24T09:12:45Z"
}


// Define routes returning JSON

app.get('/api/health', (req, res) => {
  res.json(sampleHealth);
});

app.post('/api/auth/signup', (req, res) => {
  res.json(sampleSignupResponse);
});

app.post('/api/auth/login', (req, res) => {
    res.json(sampleLoginResponse);
    res.status(200);
});

app.get('/api/dashboard', (req, res) => {
  res.json(dashboardData);
});

// Add more routes as needed similarly

app.listen(port, () => {
  console.log(`Dummy backend server listening at http://localhost:${port}`);
});
