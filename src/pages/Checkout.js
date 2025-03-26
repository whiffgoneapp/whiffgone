import React from "react";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

function Checkout() {
  const navigate = useNavigate();

  return (
    <div className="checkout">
      <h1>Thank you for your purchase! 🥳</h1>
      <p>Your order has been successfully placed.</p>
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}

export default Checkout;
