import "../blocks/ItemModal.css";
import closeImage from "../assets/closeImage.svg";
import { useEffect } from "react";
function ItemModal({ isOpen, onClose, name, weather, link }) {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [onClose]);
  return (
    <section
      id="clickedPicture"
      className={`image-modal ${isOpen ? "image-modal_opened" : ""}`}
      onClick={handleOverlayClick}
    >
      <div className="image-modal__image-container">
        <img className="image-modal__image" src={link} alt={link} />
        <div className="image-modal__image-title-container">
          <h2 className="image-modal__image-title">{name}</h2>
          <h2 className="image-modal__image-title">Weather: {weather}</h2>
        </div>
        <button
          type="button"
          id="closeImageButton"
          className="image-modal__button-close"
          onClick={onClose}
        >
          <img src={closeImage} alt="Close button" />
        </button>
      </div>
    </section>
  );
}
export default ItemModal;
