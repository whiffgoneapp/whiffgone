// Cart.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GuestModal from "../components/GuestModal";
import "./Cart.css";

const Cart = ({ cart, setCart, currentUser }) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const removeFromCart = (indexToRemove) => {
    const updatedCart = [...cart];
    if (updatedCart[indexToRemove].quantity > 1) {
      updatedCart[indexToRemove].quantity -= 1;
    } else {
      updatedCart.splice(indexToRemove, 1);
    }
    setCart(updatedCart);
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handlePayment = () => {
    if (!currentUser) {
      setShowModal(true);
    } else {
      setCart([]);
      navigate("/success");
    }
  };

  const handleGuestContinue = () => {
    setCart([]);
    setShowModal(false);
    navigate("/success");
  };

  if (!cart || cart.length === 0) {
    return <p className="empty-message">Your cart is empty.</p>;
  }

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart</h2>
      {cart.map((item, index) => (
        <div key={index} className="cart-item">
          <p>
            {item.name} - ${item.price} × {item.quantity} = ${item.price * item.quantity}
          </p>
          <button className="remove-btn" onClick={() => removeFromCart(index)}>
            Remove
          </button>
        </div>
      ))}
      <div className="total">Total: ${getTotal()}</div>

      <button className="pay-btn" onClick={handlePayment}>Pay</button>

      {showModal && (
        <GuestModal
          onClose={() => setShowModal(false)}
          onContinueAsGuest={handleGuestContinue}
        />
      )}
    </div>
  );
};

export default Cart;

















