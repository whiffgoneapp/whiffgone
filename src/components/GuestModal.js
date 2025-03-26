// src/components/GuestModal.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./GuestModal.css";

const GuestModal = ({ onClose, onContinueAsGuest }) => {
  const navigate = useNavigate();

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2 className="modal-title">Choose how you want to continue</h2>
        <div className="modal-buttons">
          <button className="modal-btn" onClick={onContinueAsGuest}>Pay as Guest</button>
          <button className="modal-btn" onClick={() => navigate("/login")}>Login</button>
          <button className="modal-btn" onClick={() => navigate("/register")}>Register</button>
        </div>
        <button className="close-btn" onClick={onClose}>×</button>
      </div>
    </div>
  );
};

export default GuestModal;


