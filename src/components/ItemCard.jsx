import "../blocks/ItemCard.css";

function ItemCard({ item, onCardClick }) {
  // If no weather data yet, don't try to filter

  return (
    <li
      className="item-card"
      onClick={() => onCardClick(item._id, item.name, item.weather, item.link)}
    >
      <img className="item-card__image" src={item.link} alt={item.name} />
      <h2 className="item-card__title">{item.name}</h2>
    </li>
  );
}

export default ItemCard;
