import "../blocks/ItemCard.css";
import { useState, useEffect } from "react";

const ItemCard = ({ item }) => {
  if (!item || typeof item !== "object") {
    console.warn("ItemCard received invalid item:", item);
    return null;
  }

  const {
    imageURL,
    title = "No title",
    description = "No description",
    techStack = [],
    demoURL,
    deployedURL,
  } = item;

  return (
    <li className="item-card">
      <img className="item-card__image" src={imageURL} alt={title} />
      <div className="item-card__content">
        <h3 className="item-card__title">{title}</h3>
        <p className="item-card__description">{description}</p>
        <ul className="item-card__tech-stack">
          {techStack.map((tech, idx) => (
            <li key={idx} className="item-card__tech">
              {tech}
            </li>
          ))}
        </ul>
        <div className="item-card__links">
          {demoURL && (
            <a
              href={demoURL}
              className="item-card__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </a>
          )}
          {deployedURL && (
            <a
              href={deployedURL}
              className="item-card__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Site
            </a>
          )}
        </div>
      </div>
    </li>
  );
};

export default ItemCard;
