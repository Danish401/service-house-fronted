import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  if (!isAuthenticated) {
    return <Navigate to="/login" />; // Redirect to login page if not authenticated
  }

  if (user?.role !== "admin") {
    return <Navigate to="/" />; // Redirect to home or any other page if not admin
  }

  return element; // Render the requested component if the user is admin
};

export default ProtectedRoute;
