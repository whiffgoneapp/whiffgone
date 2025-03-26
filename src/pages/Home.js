import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="home-title">👋 Welcome to WhiffGone</h1>
      <p className="home-subtitle">
        Fresh Confidence, Instantly. For those who live fast and smell fresh.
      </p>
      <button className="shop-button" onClick={() => navigate("/products")}>
        Shop Now
      </button>

      <p className="join-text">✨ Join the Club – discover elegance that lingers.</p>
    </div>
  );
}

export default Home;








