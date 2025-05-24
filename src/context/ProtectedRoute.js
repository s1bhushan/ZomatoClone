// components/ProtectedRoute.js
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ children, adminOnly = false, userOnly = false }) => {
  const { isAuthenticated, user } = useContext(AuthContext);

  // Not logged in? Redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // If route is admin-only and not admin, redirect
  if (adminOnly && user?.sub !== "admin@gmail.com") {
    return <Navigate to="/unauthorized" replace />;
  }

  // If route is user-only and admin is logged in, redirect (optional)
  if (userOnly && user?.sub === "admin@gmail.com") {
    return <Navigate to="/admin" replace />;
  }

  return children;
};

export default ProtectedRoute;
