import "../blocks/ItemCard.css";

function ItemCard({ weatherData, defaultClothingItems, onCardClick }) {
  // If no weather data yet, don't try to filter
  if (!weatherData) {
    return <div>Loading...</div>;
  }

  // Filter clothing items based on current weather
  const filteredClothes = defaultClothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherData.weatherType.toLowerCase();
  });

  return (
    <ul className="item-cards">
      {/* Map Filtered clothing items to DOM*/}
      {filteredClothes.map((item) => (
        <li
          key={item._id}
          className="item-card"
          onClick={() => onCardClick(item.name, item.weather, item.link)}
        >
          <img className="item-card__image" src={item.link} alt={item.name} />
          <h2 className="item-card__title">{item.name}</h2>
        </li>
      ))}
    </ul>
  );
}

export default ItemCard;
