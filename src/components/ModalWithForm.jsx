import "../blocks/ModalWithForm.css";

import close from "../assets/close.svg";
import { useEffect } from "react";
function ModalWithForm({ title, name, buttonText, onClose, isOpen, children }) {
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
  }, [onClose, isOpen]);

  return (
    <section
      className={`modal modal_type_${name}`}
      onClick={handleOverlayClick}
    >
      <div className="modal__container">
        <div className="modal__header">
          <h2 className="modal__title">{title}</h2>
        </div>
        <button type="button" className="modal__button-close" onClick={onClose}>
          <img src={close} alt="Close button" />
        </button>
        <form name={name} id={name} className="modal__form">
          {children}
          <button
            type="submit"
            id="saveNewPostButton"
            className="modal__button-save modal__button-save_disabled"
            // disabled
          >
            {buttonText}
          </button>
        </form>
      </div>
    </section>
  );
}

export default ModalWithForm;
