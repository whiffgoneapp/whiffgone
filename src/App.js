import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Waitlist from "./pages/Waitlist";

function App() {
  const [showWaitlist, setShowWaitlist] = useState(false);

  const handleCloseWaitlist = () => {
    setShowWaitlist(false);
  };

  return (
    <BrowserRouter basename="/whiffgone">
      <Navbar />
      {showWaitlist && <Waitlist onClose={handleCloseWaitlist} />}
      <Routes>
        <Route path="/" element={<Home setShowWaitlist={setShowWaitlist} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


























