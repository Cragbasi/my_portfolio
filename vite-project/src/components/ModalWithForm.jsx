import "../blocks/ModalWithForm.css";

import close from "../assets/close.svg";
import { useEffect } from "react";
function ModalWithForm({ title, name, buttonText, onClose }) {
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
      id="newPost"
      className={`modal modal_type_${name}`}
      onClick={handleOverlayClick}
    >
      <div className="modal__container">
        <div className="modal__header">
          <h2 className="modal__title">{title}</h2>
        </div>
        <button
          type="button"
          id="closeCreate-item-formButton"
          className="modal__button-close"
          onClick={onClose}
        >
          <img src={close} alt="Close button" />
        </button>
        <form name={name} id={name} className="modal__form">
          <label for="caption" className="modal__input-label">
            {" "}
            Name{" "}
          </label>
          <input
            type="text"
            id="caption"
            className="modal__input"
            placeholder="Name"
            required
            minlength="2"
            maxlength="30"
          />
          <label for="picture" className="modal__input-label">
            Image
          </label>
          <input
            id="picture"
            className="modal__input"
            placeholder="Image URL"
            required
            type="url"
          />{" "}
          <fieldset className="modal__fieldset">
            <h2 className="modal__fieldset-title">Select the weather type:</h2>
            <div className="modal__radio-botton-container">
              <input
                className="modal__input-radio"
                type="radio"
                id="hot"
                name="weather"
                value="hot"
              />

              <label for="hot" className="modal__input-radio-label">
                Hot
              </label>
            </div>

            <div className="modal__radio-botton-container">
              <input
                className="modal__input-radio"
                type="radio"
                id="warm"
                name="weather"
                value="warm"
              />

              <label for="hot" className="modal__input-radio-label">
                Warm
              </label>
            </div>
            <div className="modal__radio-botton-container">
              <input
                className="modal__input-radio"
                type="radio"
                id="cold"
                name="weather"
                value="cold"
              />
              <label for="hot" className="modal__input-radio-label">
                Cold
              </label>
            </div>
          </fieldset>
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
