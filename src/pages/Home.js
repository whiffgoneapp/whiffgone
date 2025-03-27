import React, { useState } from "react";
import "./Home.css";
import Waitlist from "./Waitlist";

const Home = ({ currentUser }) => {
  const [showWaitlist, setShowWaitlist] = useState(true);

  return (
    <div className="home-container">
      {showWaitlist && <Waitlist onClose={() => setShowWaitlist(false)} />}
      <h1 className="home-title">👋 Welcome to WhiffGone</h1>
      <p className="home-subtitle">
        Fresh Confidence, Instantly. For those who live fast and smell fresh.
      </p>
      <button className="shop-button" onClick={() => window.location.href = "/whiffgone/products"}>
        Shop Now
      </button>
    </div>
  );
};

export default Home;











