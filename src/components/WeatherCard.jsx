import { useContext } from "react";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext.jsx";
import "../blocks/WeatherCard.css";
import weatherCard from "../assets/WeatherCard.svg";

function WeatherCard({ weatherData }) {
  const { currentTemperatureUnit, tempUnitConversion } = useContext(
    CurrentTemperatureUnitContext
  );

  return (
    <div className="weather-card ">
      <img
        className="weather-card__background"
        src={weatherCard}
        alt="Weather card background image"
      ></img>
      <p className="weather-card__temperature">
        {" "}
        {currentTemperatureUnit === "F"
          ? tempUnitConversion.F.temperature(weatherData?.temperature)
          : tempUnitConversion.C.temperature(weatherData?.temperature)}
        °{currentTemperatureUnit}{" "}
      </p>
    </div>
  );
}
export default WeatherCard;
