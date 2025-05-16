import { useState } from "react";
import axios from "axios";
import "../styles/adminLogin.css";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("https://kaarthaveerya-studio.onrender.com/api/admin/login", {
        username,
        password,
      });

      localStorage.setItem("adminToken", res.data.token);
      window.location.href = "/admin/panel";
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-box">
        <h2 className="admin-login-title">Admin Login</h2>
        <form onSubmit={handleLogin} className="admin-login-form">
          <input
            type="text"
            placeholder="Username"
            className="admin-login-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="admin-login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="admin-login-button">
            Login
          </button>
          {error && <p className="admin-login-error">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
