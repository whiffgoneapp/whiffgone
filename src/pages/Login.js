import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

function Login({ setCurrentUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("currentUser"));

    if (!storedUser) {
      setError("No registered user found.");
      return;
    }

    if (storedUser.email === email && storedUser.password === password) {
      setCurrentUser(storedUser);
      navigate("/");
    } else {
      setError("Incorrect email or password.");
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      {error && <div className="error-msg">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Email</label>
          <input
            type="email"
            placeholder="e.g. jane@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-field">
          <label>Password</label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="submit-btn" type="submit">
          Login
        </button>
      </form>

      <p style={{ marginTop: "1rem", textAlign: "center" }}>
        Not registered?{" "}
        <Link to="/register" style={{ color: "#4caf50", fontWeight: "bold" }}>
          Create an account
        </Link>
      </p>
    </div>
  );
}

export default Login;
