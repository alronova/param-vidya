import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Link,
  Divider,
  Stack,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import logo from "../assets/logo.png";
import backgroundImage from "../assets/image.jpg";

const Title = styled(Typography)(({ theme }) => ({
  fontFamily: "'Philosopher', sans-serif",
  fontWeight: 700,
  fontSize: "2.8rem",
  color: "#472D30",
  marginBottom: theme.spacing(4),
}));

const FormButton = styled(Button)(({ theme }) => ({
  fontFamily: "'Philosopher', sans-serif",
  fontWeight: 600,
  textTransform: "none",
  fontSize: "1.1rem",
  padding: theme.spacing(1.5, 4),
  background: "linear-gradient(135deg, #FFE1A8 10%, #FFCA66 50%, #FFE1A8 90%)",
  color: "#472D30",
  boxShadow: "0 6px 12px rgba(143, 3, 4, 0.15)",
  borderRadius: 30,
  letterSpacing: "0.03em",
  transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
  "&:hover": {
    boxShadow: "0 12px 24px rgba(143, 3, 4, 0.25)",
    transform: "translateY(-4px) scale(1.07)",
    color: "#8F0304",
  },
}));

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    userName: "",
    password: "",
  });

  const apiUrl = import.meta.env.VITE_API_URL;

  const toggleMode = () => {
    setIsLogin((prev) => !prev);
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      userName: "",
      password: "",
    });
  };

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isLogin) {
        // Prepare LoginRequest payload
        const loginPayload = {
          email: form.email,
          password: form.password,
        };

        const response = await fetch(`${apiUrl}/api/auth/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(loginPayload),
        });

        if (!response.ok) {
          const errData = await response.json();
          throw new Error(errData.message || "Login failed");
        }

        // Receive LoginResponse
        const data = await response.json();

        // Store JWT token in localStorage
        localStorage.setItem("ACCESS_TOKEN", data.token || data.data.token);

        alert("Login successful!");
        // Redirect or further logic here, e.g. navigate("/dashboard")
      } else {
        // Prepare SignupRequest payload
        const signupPayload = {
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          userName: form.userName,
          password: form.password,
        };

        const response = await fetch(`${apiUrl}/api/auth/signup`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(signupPayload),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Signup failed");
        }

        alert("Signup successful! Please login.");
        toggleMode(); // redirect to login mode on success
      }
    } catch (error) {
      alert(error.message);
    }
  };


  return (
    <Box
      position="relative"
      minHeight="100vh"
      width="100vw"
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "repeat",
        backgroundSize: "400px",
        overflow: "hidden",
      }}
    >
      {/* Logo top-right */}
      <Box
        position="absolute"
        top={20}
        right={20}
        sx={{ zIndex: 10 }}
      >
        <img
          src={logo}
          alt="Param Vidya Logo"
          style={{ height: 100, width: "auto" }}
        />
      </Box>

      {/* Centered form container */}
      <Box
        height="100vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        px={3}
        maxWidth={400}
        mx="auto"
      >
        <Title>{isLogin ? "Login" : "Sign Up"}</Title>
        <Box
          component="form"
          width="100%"
          noValidate
          autoComplete="off"
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          onSubmit={handleSubmit}
        >
          {!isLogin && (
            <>
              <TextField
                label="First Name"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                variant="outlined"
                required
                fullWidth
                InputProps={{ sx: { fontFamily: "'Philosopher', sans-serif" } }}
              />
              <TextField
                label="Last Name"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                variant="outlined"
                required
                fullWidth
                InputProps={{ sx: { fontFamily: "'Philosopher', sans-serif" } }}
              />
            </>
          )}
          <TextField
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            variant="outlined"
            required
            fullWidth
            InputProps={{ sx: { fontFamily: "'Philosopher', sans-serif" } }}
          />
          {!isLogin && (
            <TextField
              label="Username"
              name="userName"
              value={form.userName}
              onChange={handleChange}
              variant="outlined"
              required
              fullWidth
              InputProps={{ sx: { fontFamily: "'Philosopher', sans-serif" } }}
            />
          )}
          <TextField
            label="Password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            variant="outlined"
            required
            fullWidth
            InputProps={{ sx: { fontFamily: "'Philosopher', sans-serif" } }}
          />

          <FormButton type="submit">
            {isLogin ? "Login" : "Sign Up"}
          </FormButton>
        </Box>

        <Stack
          direction="row"
          justifyContent="center"
          mt={3}
          spacing={1}
          alignItems="center"
        >
          <Divider sx={{ flexGrow: 1 }} />
          <Typography
            variant="body2"
            sx={{ fontFamily: "'Philosopher', sans-serif", color: "#472D30" }}
          >
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </Typography>
          <Divider sx={{ flexGrow: 1 }} />
        </Stack>

        <Link
          href="#"
          onClick={(e) => {
            e.preventDefault();
            toggleMode();
          }}
          underline="hover"
          sx={{
            mt: 1,
            cursor: "pointer",
            color: "#8F0304",
            fontWeight: 600,
            fontFamily: "'Philosopher', sans-serif",
          }}
        >
          {isLogin ? "Sign Up" : "Login"}
        </Link>
      </Box>
    </Box>
  );
}

export default Login;
