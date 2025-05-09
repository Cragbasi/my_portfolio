import "../blocks/Profile.css";
import SideBar from "./SideBar";
import ClothesSection from "./ClothesSection";
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

  return (
    <div className="profile">
      <SideBar />
      <ClothesSection
        weatherData={weatherData}
        defaultClothingItems={defaultClothingItems}
        onCardClick={onCardClick}
        onOpenModal={onOpenModal}
      />
    </div>
  );
}
export default Profile;
