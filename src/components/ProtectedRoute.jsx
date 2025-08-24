import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

function ProtectedRoute({ children }) {
  const [isAuthorized, setIsAuthorized] = useState(null);

  useEffect(() => {
    const auth = async () => {
      const token = localStorage.getItem("ACCESS_TOKEN");
      if (!token) {
        setIsAuthorized(false);
      } else {
        setIsAuthorized(true);
      }
    };
    auth();
  }, []);

  if (isAuthorized === null) {
    return <div>Loading...</div>;
  }

  return isAuthorized ? children : <Navigate to="/login" replace />;
}

export const handleSuccess = (msg) => {
  toast.success(msg, {
    position: "top-right",
  });
};

export const handleError = (msg) => {
  toast.error(msg, {
    position: "top-right",
  });
};

export default ProtectedRoute;
