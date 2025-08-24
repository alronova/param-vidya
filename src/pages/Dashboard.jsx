import React, { useEffect, useState } from "react";
import { Box, Typography, CircularProgress, Paper } from "@mui/material";
import api from "../components/api";

function Dashboard() {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        setLoading(true);
        const response = await api.get("/api/dashboard");
        setDashboardData(response.data.data || response.data);
      } catch (err) {
        setError(err.response?.data?.message || err.message || "Failed to load dashboard");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box mt={4} textAlign="center">
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Box>
    );
  }

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        Dashboard Data
      </Typography>
      <Paper elevation={3} sx={{ padding: 3, whiteSpace: "pre-wrap", fontFamily: "'Courier New', monospace" }}>
        {JSON.stringify(dashboardData, null, 2)}
      </Paper>
    </Box>
  );
}

export default Dashboard;
