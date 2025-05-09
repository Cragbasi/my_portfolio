import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { CurrentTemperatureUnitProvider } from "../contexts/CurrentTemperatureUnitContext.jsx";
import "../blocks/App.css";
import { WeatherApi } from "../utils/WeatherApi.js";
import { ApiForClothingItems } from "../utils/api.js";
import {
  coordinate,
  APIkey,
  defaultClothingItems,
} from "../utils/constants.js";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ItemModal from "./ItemModal.jsx";

import Profile from "./Profile.jsx";
import AddItemModal from "./AddItemModal.jsx";

function App() {
  const apiClothingItems = new ApiForClothingItems({
    baseUrl: "http://localhost:3006/items",
  });
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);
  const handleAddItem = (item) => {
    apiClothingItems
      .postItem(item.name, item.weather, item.link)
      .then((res) => {
        console.log("New item:", res);
        // Add the new item at the beginning of the array
        setClothingItems((prevItems) => [res, ...prevItems]);
      })
      .catch((err) => {
        console.error("API error:", err);
      });
    handleCloseAddingModal();
  };

  const handleDeleteItem = (id) => {
    apiClothingItems
      .deleteItem(id)
      .then((res) => {
        // Add the new item at the beginning of the array
        setClothingItems((prevItems) =>
          prevItems.filter((item) => item._id !== id)
        );
        handleItemModalClose();
      })
      .catch((err) => {
        console.error("API error:", err);
      });
  };

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
  const handleItemModalOpen = (id, name, weather, link) => {
    console.log("Modal opening with:", id, name, weather);
    setIsItemModalOpen(true);
    setSelectedItem({ id, name, weather, link });
  };

  const handleItemModalClose = () => {
    setIsItemModalOpen(false);
  };
  useEffect(() => {
    const apiForWeather = new WeatherApi({
      baseUrl: `https://api.openweathermap.org/data/2.5/weather?lat=${coordinate.latitude}&lon=${coordinate.longitude}&units=imperial&appid=${APIkey}`,
    });

    apiForWeather
      .getInfo()
      .then((res) => {
        setWeatherData(res);
      })
      .catch((err) => {
        console.error("API error:", err);
      });

    apiClothingItems
      .getItems()
      .then((res) => {
        setClothingItems(res);
      })
      .catch((err) => {
        console.error("API error:", err);
      });
  }, []);

  return (
    <div className="page">
      <CurrentTemperatureUnitProvider>
        <Header weatherData={weatherData} onOpenModal={handleOpenAddingModal} />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                weatherData={weatherData}
                defaultClothingItems={clothingItems}
                onCardClick={handleItemModalOpen}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <Profile
                onOpenModal={handleOpenAddingModal}
                weatherData={weatherData}
                defaultClothingItems={clothingItems}
                onCardClick={handleItemModalOpen}
              />
            }
          />
        </Routes>
      </CurrentTemperatureUnitProvider>
      <Footer />
      <ItemModal
        isOpen={isItemModalOpen}
        onClose={handleItemModalClose}
        name={selectedItem?.name}
        weather={selectedItem?.weather}
        link={selectedItem?.link}
        handleDelete={() => handleDeleteItem(selectedItem?.id)}
      />

      {isAddModalOpen && (
        <AddItemModal
          onClose={handleCloseAddingModal}
          isOpen={isAddModalOpen}
          onAddItem={handleAddItem}
        ></AddItemModal>
      )}
    </div>
  );
}

export default App;
