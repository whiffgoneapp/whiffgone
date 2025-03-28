import React from "react";

const Home = ({ setShowWaitlist }) => {
  return (
    <div className="home-container">
      <h1>Welcome to WhiffGone</h1>
      <p>Experience freshness like never before</p>
      <button className="shop-button" onClick={() => setShowWaitlist(true)}>
        Shop Now
      </button>
    </div>
  );
};

export default Home;












