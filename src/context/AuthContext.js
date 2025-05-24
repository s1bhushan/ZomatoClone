import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Store user object, e.g. { username, role, ... }
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // You might want to decode JWT token here to extract user info, or fetch user info from backend
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
      // Example: decode user info from token
      const decodedUser = decodeToken(token);  // You need to implement decodeToken
      setUser(decodedUser);
    } else {
      setIsAuthenticated(false);
      setUser(null);
    }
  }, []);

  const login = (token) => {
    localStorage.setItem("token", token);
    setIsAuthenticated(true);
    // Decode user from token
    const decodedUser = decodeToken(token);
    setUser(decodedUser);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setUser(null);
  };

  // Helper function to decode JWT token (if you have jwt-decode or similar)
  function decodeToken(token) {
    try {
      // If you use jwt-decode package:
      // import jwt_decode from "jwt-decode";
      // return jwt_decode(token);

      // Or basic decoding without verifying (not recommended for production):
      const base64Url = token.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
      );
      return JSON.parse(jsonPayload);
    } catch (e) {
      console.error("Failed to decode token", e);
      return null;
    }
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
