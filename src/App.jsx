import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Sutra from "./pages/Sutra";
import Veda from "./pages/Veda";
import Leaderboard from "./components/Leaderboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/sutra/:id"
          element={
            <ProtectedRoute>
              <Sutra />
            </ProtectedRoute>
          }
        />

        <Route
          path="/veda/:id"
          element={
            <ProtectedRoute>
              <Veda />
            </ProtectedRoute>
          }
        />

        <Route
          path="/rajavali"
          element={
            <ProtectedRoute>
              <Leaderboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
