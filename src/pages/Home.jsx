import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import backgroundImage from '../assets/image.jpg';

const AnimatedTitle = styled(Typography)(({ theme }) => ({
    fontWeight: 700,
    fontSize: "5.3rem",
    letterSpacing: "0.01em",
    color: "#472D30",
    fontFamily: "'Philosopher', sans-serif",
    marginBottom: theme.spacing(5),
    transition: "transform 0.3s cubic-bezier(0.5,1.2,0.5,1.02), letter-spacing 0.35s",
    cursor: "pointer",
    "&:hover": {
        transform: "translateY(-3px)",
        letterSpacing: "0.05em"
    }
}));

const AnimatedButton = styled(Button)(({ theme }) => ({
    fontWeight: 600,
    textTransform: "none",
    fontSize: "1.1rem",
    padding: theme.spacing(1.5, 4),
    fontFamily: "'Philosopher', sans-serif",
    background: "linear-gradient(135deg, #FFE1A8 10%, #FFCA66 50%, #FFE1A8 90%)",
    color: "#472D30",
    boxShadow: "0 6px 12px rgba(143, 3, 4, 0.15)",
    borderRadius: 30,
    letterSpacing: "0.03em",
    transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
    backdropFilter: "blur(6px)",
    WebkitBackdropFilter: "blur(6px)",
    "&:hover": {
        boxShadow: "0 12px 24px rgba(143, 3, 4, 0.25)",
        transform: "translateY(-4px) scale(1.07)",
        color: "#8F0304",
        "& .MuiSvgIcon-root": {
            transform: "translateX(6px)",
            transition: "transform 0.35s ease"
        }
    },
    "& .MuiSvgIcon-root": {
        transition: "transform 0.35s ease"
    }
}));

function Home() {
  const navigate = useNavigate();

  return (
    <Box
      position="relative"
      minHeight="100vh"
      width="100vw"
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "repeat",
        backgroundSize: "400px",
        overflow: "hidden"
      }}
    >
      {/* Logo positioned top-right */}
      <Box
        position="absolute"
        top={0}
        right={20}
        sx={{ zIndex: 10 }}
      >
        <img
          src={logo}
          alt="Param Vidya Logo"
          style={{
            height: 180,
            width: "auto"
          }}
        />
      </Box>

      {/* Centered title and button */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
        textAlign="center"
        px={2}
      >
        <AnimatedTitle>
          Param Vidya
        </AnimatedTitle>
        <AnimatedButton
          endIcon={<ArrowForwardIcon />}
          onClick={() => navigate("/dashboard")}
        >
          Go to Dashboard
        </AnimatedButton>
      </Box>
    </Box>
  );
}


export default Home;
