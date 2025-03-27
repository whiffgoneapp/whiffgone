import React, { useState, useEffect } from "react";
import "./Waitlist.css";

const Waitlist = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(
      "https://script.google.com/macros/s/AKfycbyXoUiuyK34yXn7dqpAJlMkFBsPXw51fpaEBpRwaeqmwNuTEcsK-zKroVCZ8iah6vI/exec",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }
    )
      .then(() => setSubmitted(true))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [submitted, onClose]);

  return (
    <div className="waitlist-overlay">
      <div className="waitlist-modal">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        {submitted ? (
          <h2 className="thank-you">✨ Thank you for joining! ✨</h2>
        ) : (
          <>
            <h2 className="waitlist-title">Be First to Experience WhiffGone</h2>
            <p className="waitlist-sub">
              Freshness awaits. Leave your email, and we’ll notify you the moment we launch.
            </p>
            <form className="waitlist-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <button type="submit" className="submit-btn">
                Get Early Access
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Waitlist;







