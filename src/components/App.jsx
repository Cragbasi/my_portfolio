import React, { useState, useEffect } from "react";
import "../blocks/App.css";
import { weatherApi } from "../utils/weatherApi.js";
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
    const api = new weatherApi({
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
    <div div className="page">
      <Header weatherData={weatherData} onOpenModal={handleOpenModal} />
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
      {isModalOpen && (
        <ModalWithForm
          title="New garment"
          name="create-item-form"
          buttonText="Add garment"
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default App;
