//Project-K/studio/frontend/src/pages/AdminLogin.jsx

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/adminLogin.css";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const username = formData.username.trim();
    const password = formData.password.trim();

    if (!username || !password) {
      setError("Please enter credentials");
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post(
        "https://kaarthaveerya-studio.onrender.com/api/admin/login",
        { username, password }
      );

      localStorage.setItem("adminToken", res.data.token);
      navigate("/admin/panel");

    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-box">
        <h2 className="admin-login-title">Admin Login</h2>

        <form
          onSubmit={handleLogin}
          className="admin-login-form"
          autoComplete="off"
        >
          {/* Hidden dummy fields to prevent autofill */}
          <input
            type="text"
            name="fake-username"
            autoComplete="username"
            style={{ display: "none" }}
          />
          <input
            type="password"
            name="fake-password"
            autoComplete="current-password"
            style={{ display: "none" }}
          />

          <input
            type="text"
            name="username"
            placeholder="Username"
            className="admin-login-input"
            value={formData.username}
            onChange={handleChange}
            autoComplete="new-username"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="admin-login-input"
            value={formData.password}
            onChange={handleChange}
            autoComplete="new-password"
            required
          />

          <button
            type="submit"
            className="admin-login-button"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          {error && <p className="admin-login-error">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;