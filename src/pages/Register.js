import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

function Register({ setCurrentUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    const newUser = { name, email, password };
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    setCurrentUser(newUser);
    navigate("/");
  };

  return (
    <div className="form-container">
      <h2>Create Account</h2>
      {error && <div className="error-msg">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Jane Doe"
          />
        </div>

        <div className="form-field">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="e.g. jane@example.com"
          />
        </div>

        <div className="form-field">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Choose a secure password"
          />
        </div>

        <button className="submit-btn" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;

