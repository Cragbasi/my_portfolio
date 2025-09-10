import { useState, useEffect } from "react";
import "../blocks/About.css";

import { slides } from "../utils/constants.jsx";

function About({}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearTimeout(timer);
  }, [current]);
  return (
    <div className="about">
      {/* <img className="about__avatar" src={avatar} alt="Avatar image"></img> */}
      <div className="about__text-container">
        <h1 className="about__title">About me</h1>

        <div className="about__slides">
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className={`about__slide${
                current === idx ? " about__slide_active" : ""
              }`}
              style={{ display: current === idx ? "flex" : "none" }}
            >
              <div className="about__slide-image">
                <img className="about__avatar" src={slide.image} alt="Avatar" />
              </div>
              <div className="about__slide-description">
                <p className="about__description">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="about__slide-selector">
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={`about__slide-dot${
                current === idx ? " about__slide-dot_active" : ""
              }`}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default About;
