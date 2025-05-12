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
