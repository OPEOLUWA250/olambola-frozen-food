import { useState } from "react";

export const useAuth = () => {
  const [isAdmin, setIsAdmin] = useState(
    localStorage.getItem("admin_authenticated") === "true",
  );
  const [error, setError] = useState(null);

  const login = (password) => {
    const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD;
    if (password === adminPassword) {
      setIsAdmin(true);
      localStorage.setItem("admin_authenticated", "true");
      setError(null);
      return true;
    } else {
      setError("Invalid password");
      return false;
    }
  };

  const logout = () => {
    setIsAdmin(false);
    localStorage.removeItem("admin_authenticated");
    setError(null);
  };

  return {
    isAdmin,
    login,
    logout,
    error,
  };
};
