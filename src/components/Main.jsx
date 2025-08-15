import { useState, useEffect } from "react";

import "../blocks/Main.css";

function Main({ isChecked, slides, title }) {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  useEffect(() => {
    // Reset to first slide if array changes (isChecked toggled)
    setCurrent(0);
  }, [isChecked]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 30000);
    return () => clearTimeout(timer);
  }, [current, total]);

  const goPrev = () => setCurrent((prev) => (prev - 1 + total) % total);
  const goNext = () => setCurrent((prev) => (prev + 1) % total);

  const item = slides[current];

  return (
    <div className="main">
      <h1 className="main__title"> {title} </h1>
      <div className="slideshow">
        <button
          className="slideshow__arrow slideshow__arrow_left"
          onClick={goPrev}
          aria-label="Previous"
        />
        <div className="slideshow__card">
          <div className="slideshow__content">
            <h2 className="slideshow__title">{item.title}</h2>
            <p className="slideshow__description">{item.description}</p>
            <ul className="slideshow__techstack">
              {item.techStack.map((tech, idx) => (
                <li key={idx} className="slideshow__tech">
                  {tech}
                </li>
              ))}
            </ul>
            <div className="slideshow__links">
              {item.demoURL && (
                <a
                  href={item.demoURL}
                  className="slideshow__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
              )}
              {item.deployedURL && (
                <a
                  href={item.deployedURL}
                  className="slideshow__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Site
                </a>
              )}
            </div>
          </div>
          <div className="slideshow__image-container">
            <img
              className="slideshow__image"
              src={item.imageURL}
              alt={item.title}
            />
          </div>
        </div>
        <button
          className="slideshow__arrow slideshow__arrow_right"
          onClick={goNext}
          aria-label="Next"
        />
      </div>
    </div>
  );
}

export default Main;
