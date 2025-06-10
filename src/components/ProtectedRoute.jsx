// import React from "react";
// import { Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";

// const ProtectedRoute = ({ element }) => {
//   const { isAuthenticated, user } = useSelector((state) => state.auth);

//   if (!isAuthenticated) {
//     return <Navigate to="/login" />; // Redirect to login page if not authenticated
//   }

//   if (user?.role !== "admin") {
//     return <Navigate to="/" />; // Redirect to home or any other page if not admin
//   }

//   return element; // Render the requested component if the user is admin
// };

// export default ProtectedRoute;
import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  // If user is not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // If user is not admin, redirect to home or any other page
  if (user?.role !== "admin") {
    return <Navigate to="/" />;
  }

  // If authenticated and is admin, render the protected element
  return element;
};

export default ProtectedRoute;
