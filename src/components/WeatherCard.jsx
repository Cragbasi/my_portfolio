import "../blocks/WeatherCard.css";
import weatherCard from "../assets/WeatherCard.svg";

function WeatherCard({ weatherData }) {
  // If no weather data yet, don't try to filter
  return (
    <div className="weather-card ">
      <img
        className="weather-card__background"
        src={weatherCard}
        alt="Weather card background image"
      ></img>
      <p className="weather-card__temperature">
        {" "}
        {weatherData?.temperature}°F{" "}
      </p>
    </div>
  );
}
export default WeatherCard;
