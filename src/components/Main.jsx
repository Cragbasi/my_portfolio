import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext.jsx";
import "../blocks/Main.css";
import WeatherCard from "./WeatherCard";
import ItemCard from "./ItemCard";

function Main({ weatherData, defaultClothingItems, onCardClick }) {
  if (!weatherData) {
    return <div>Loading...</div>;
  }

  // Filter clothing items based on current weather
  const filteredClothes = defaultClothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherData.weatherType.toLowerCase();
  });

  const { currentTemperatureUnit, tempUnitConversion } = useContext(
    CurrentTemperatureUnitContext
  );

  return (
    <div className="main">
      <WeatherCard weatherData={weatherData} />
      <h2 className="main__title">
        {" "}
        Today is{" "}
        {currentTemperatureUnit === "F"
          ? tempUnitConversion.F.temperature(weatherData?.temperature)
          : tempUnitConversion.C.temperature(weatherData?.temperature)}
        ° {currentTemperatureUnit} / You may want to wear:
      </h2>
      <ul className="item-cards">
        {/* Map Filtered clothing items to DOM*/}
        {filteredClothes.map((item) => (
          <ItemCard
            key={item._id}
            item={item}
            weatherData={weatherData}
            defaultClothingItems={defaultClothingItems}
            onCardClick={onCardClick}
          />
        ))}
      </ul>
    </div>
  );
}
export default Main;
