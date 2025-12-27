
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Login({ setIsLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {

    if (!username || !password) {
      alert("Please enter username and password");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:8787/api/login",
        { username, password }
      );

      if (res.data === "Login Success") {
        alert("Login Successful");
        setIsLogin(true);
        navigate("/");
      }
    } catch (error) {
      alert("Invalid Username or Password");
    }
  };

  return (
    <div className="container mt-5 col-md-4">
      <h4 className="mb-3">Login</h4>

      <input
        className="form-control mb-2"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        className="form-control mb-3"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        type="button"
        className="btn btn-primary w-100 mb-2"
        onClick={handleLogin}
      >
        Login
      </button>

      <p className="text-center">
        New Owner? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
}

export default Login;
