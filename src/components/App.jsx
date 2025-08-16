import React, { useState, useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import "../blocks/App.css";
import Header from "./Header";
import Main from "./Main.jsx";
import About from "./About.jsx";
import Confahm from "./Confahm.jsx";
import { mechanical, software } from "../utils/constants.jsx";

import Footer from "./Footer";

function App() {
  const [isChecked, setIsChecked] = useState(true);
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Select array and title based on isChecked
  const slides = isChecked ? software : mechanical;
  const title = `${
    isChecked ? "Software Engineering" : "Mechanical Engineering"
  } Work Experience`;

  return (
    <div className="page">
      <>
        <Header
          isChecked={isChecked}
          setIsChecked={setIsChecked}
          onHomeClick={scrollToAbout}
        />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Main
                  path="/"
                  isChecked={isChecked}
                  slides={slides}
                  title={title}
                ></Main>
                <div ref={aboutRef}>
                  <About />
                </div>
              </>
            }
          />
          <Route path="/confahm" element={<Confahm />} />
        </Routes>
      </>
      <Footer />
    </div>
  );
}

export default App;
