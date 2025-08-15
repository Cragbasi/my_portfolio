import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "../blocks/App.css";
import { mechanical, software } from "../utils/constants.jsx";
import Header from "./Header";
import Main from "./Main.jsx";
import About from "./About.jsx";

import Footer from "./Footer";

function App() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="page">
      <Header isChecked={isChecked} setIsChecked={setIsChecked} />
      <Routes>
        <Route path="/" element={<About />} />

        {/* <Route path="/mechanical" element={<Profile />} />
        <Route path="/software" element={<Profile />} /> */}
      </Routes>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
