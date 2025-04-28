import "../blocks/Main.css";
import WeatherCard from "./WeatherCard";
import ItemCard from "./ItemCard";

function Main({ weatherData, defaultClothingItems, onCardClick }) {
  return (
    <div className="main">
      <WeatherCard weatherData={weatherData} />
      <h2 className="main__title">
        {" "}
        Today is {weatherData?.temperature}° F / You may want to wear:
      </h2>
      <ItemCard
        weatherData={weatherData}
        defaultClothingItems={defaultClothingItems}
        onCardClick={onCardClick}
      />
    </div>
  );
}
export default Main;
