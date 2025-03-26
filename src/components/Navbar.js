import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ currentUser, onLogout, cart }) => {
  const cartCount = cart?.reduce((total, item) => total + item.quantity, 0) || 0;

  return (
    <nav className="navbar">
      <Link to="/" className="logo">WhiffGone</Link>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/products" className="nav-link">Products</Link>
        <Link to="/cart" className="nav-link">Cart ({cartCount})</Link>

        {currentUser ? (
          <>
            <span className="welcome-text">Hello, {currentUser.name}!</span>
            <button className="logout-btn" onClick={onLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/register" className="nav-link">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;


