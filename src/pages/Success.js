import React from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "@react-hook/window-size";
import { Link } from "react-router-dom";
import "./Success.css";

const Success = () => {
  const [width, height] = useWindowSize();

  return (
    <div className="success-container">
      <Confetti width={width} height={height} />
      <div className="success-content">
        <h1>🎉 Payment Successful!</h1>
        <p>Thank you for shopping with WhiffGone.</p>
        <Link to="/" className="home-btn">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Success;




