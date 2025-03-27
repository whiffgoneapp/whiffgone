// src/pages/Waitlist.js
import React, { useState } from "react";
import "./Waitlist.css";

const Waitlist = ({ onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log("Waitlist Submitted:", formData);
  };

  return (
    <div className="waitlist-overlay">
      <div className="waitlist-modal">
        <button className="waitlist-close" onClick={onClose}>
          &times;
        </button>
        {!submitted ? (
          <>
            <h2>Join the Waitlist</h2>
            <p>Be the first to know when WhiffGone launches.</p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="First Name"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              <button type="submit">Notify Me</button>
            </form>
          </>
        ) : (
          <div className="thank-you">
            <h3>Thanks for joining!</h3>
            <p>We'll let you know when we launch.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Waitlist;


