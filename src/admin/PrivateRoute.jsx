import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
  // 🔐 Temporary auth check (replace later with real login logic)
  const isAuthenticated = localStorage.getItem("adminAuth") === "true";

  // If logged in → show child route
  // If not → redirect to /admin login page
  return isAuthenticated ? <Outlet /> : <Navigate to="/admin" replace />;
}
