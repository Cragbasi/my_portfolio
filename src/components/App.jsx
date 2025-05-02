import React, { useState, useEffect } from "react";
import "../blocks/App.css";
import { WeatherApi } from "../utils/WeatherApi.js";
import {
  coordinate,
  APIkey,
  defaultClothingItems,
} from "../utils/constants.js";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ItemModal from "./ItemModal.jsx";
import ModalWithForm from "./ModalWithForm.jsx";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [isAddModalOpen, setisAddModalOpen] = useState(false);

  const handleOpenAddingModal = () => {
    setisAddModalOpen(true);
  };

  const handleCloseAddingModal = () => {
    setisAddModalOpen(false);
  };

  const [isItemModalOpen, setIsItemModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const handleItemModalOpen = (name, weather, link) => {
    console.log("Modal opening with:", name, weather);
    setIsItemModalOpen(true);
    setSelectedItem({ name, weather, link });
  };

  const handleItemModalClose = () => {
    setIsItemModalOpen(false);
  };
  useEffect(() => {
    const api = new WeatherApi({
      baseUrl: `https://api.openweathermap.org/data/2.5/weather?lat=${coordinate.latitude}&lon=${coordinate.longitude}&units=imperial&appid=${APIkey}`,
    });

    api
      .getInfo()
      .then((res) => {
        setWeatherData(res);
      })
      .catch((err) => {
        console.error("API error:", err);
      });
  }, []);

  return (
    <div className="page">
      <Header weatherData={weatherData} onOpenModal={handleOpenAddingModal} />
      <Main
        weatherData={weatherData}
        defaultClothingItems={defaultClothingItems}
        onCardClick={handleItemModalOpen}
      />
      <Footer />
      <ItemModal
        isOpen={isItemModalOpen}
        onClose={handleItemModalClose}
        name={selectedItem?.name}
        weather={selectedItem?.weather}
        link={selectedItem?.link}
        onOpenModal={handleItemModalOpen}
      />
      {isAddModalOpen && (
        <ModalWithForm
          title="New garment"
          name="create-item-form"
          buttonText="Add garment"
          onClose={handleCloseAddingModal}
          isOpen={isAddModalOpen}
        >
          <label htmlFor="caption" className="modal__input-label">
            {" "}
            Name{" "}
          </label>
          <input
            type="text"
            id="caption"
            className="modal__input"
            placeholder="Name"
            required
            minLength="2"
            maxLength="30"
          />
          <label htmlFor="picture" className="modal__input-label">
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

              <label htmlFor="hot" className="modal__input-radio-label">
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

              <label htmlFor="warm" className="modal__input-radio-label">
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
              <label htmlFor="cold" className="modal__input-radio-label">
                Cold
              </label>
            </div>
          </fieldset>
        </ModalWithForm>
      )}
    </div>
  );
}

export default App;
