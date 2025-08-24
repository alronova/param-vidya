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

// Define routes returning JSON

app.get('/api/health', (req, res) => {
  res.json(sampleHealth);
});

app.post('/api/auth/signup', (req, res) => {
  res.json(sampleSignupResponse);
});

app.post('/api/auth/login', (req, res) => {
    res.json(sampleLoginResponse);
    console.log("Login endpoint hit");
    res.status(200);
});

// Add more routes as needed similarly

app.listen(port, () => {
  console.log(`Dummy backend server listening at http://localhost:${port}`);
});
