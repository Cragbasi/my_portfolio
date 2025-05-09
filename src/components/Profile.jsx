import { useContext } from "react";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext.jsx";
import "../blocks/Profile.css";
import ItemCard from "./ItemCard";
import Avatar from "../assets/Avatar.svg";

function Profile({
  weatherData,
  defaultClothingItems,
  onCardClick,
  onOpenModal,
}) {
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
    <div className="profile">
      <div className="profile__info-container">
        <img className="profile__avatar" src={Avatar} alt="Header avatar"></img>
        <p className="profile__name"> Terrence Tegegne </p>
      </div>
      <div className="cards">
        <div className="cards__title-container ">
          <p className="cards__title"> Your items</p>
          <button
            type="button"
            className="cards__add-clothes-button"
            onClick={onOpenModal}
          >
            + Add clothes
          </button>
        </div>
        <ul className="cards__container">
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
    </div>
  );
}
export default Profile;
