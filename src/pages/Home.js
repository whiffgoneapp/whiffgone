import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Waitlist from "./Waitlist";

const Home = () => {
  const navigate = useNavigate();
  const [showWaitlist, setShowWaitlist] = useState(true);

  useEffect(() => {
    const alreadySeen = localStorage.getItem("waitlistDismissed");
    if (alreadySeen) {
      setShowWaitlist(false);
    }
  }, []);

  const handleCloseWaitlist = () => {
    setShowWaitlist(false);
    localStorage.setItem("waitlistDismissed", "true");
  };

  return (
    <div className="home-container">
      {showWaitlist && <Waitlist onClose={handleCloseWaitlist} />}

      <h1 className="home-title">👋 Welcome to WhiffGone</h1>
      <p className="home-subtitle">
        Fresh Confidence, Instantly. For those who live fast and smell fresh.
      </p>
      <button className="shop-button" onClick={() => navigate("/products")}>
        Shop Now
      </button>
    </div>
  );
};

export default Home;










