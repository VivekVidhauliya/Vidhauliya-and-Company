import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLoginn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // 🔐 Simple demo login (replace later with backend API)
    if (username === "admin" && password === "admin123") {
      localStorage.setItem("token", "admin-token");
      navigate("/admin/dashboard");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-80">
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>

        <input
          className="w-full border p-2 mb-4 rounded"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          className="w-full border p-2 mb-4 rounded"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
        >
          Login
        </button>
      </div>
    </div>
  );
}
