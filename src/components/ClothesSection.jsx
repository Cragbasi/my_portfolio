import "../blocks/Profile.css";
import ItemCard from "./ItemCard";

function ClothesSection({
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

  return (
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
  );
}
export default ClothesSection;
