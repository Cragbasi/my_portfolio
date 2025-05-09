import "../blocks/Profile.css";
import Avatar from "../assets/Avatar.svg";

function SideBar() {
  return (
    <div className="profile__info-container">
      <img className="profile__avatar" src={Avatar} alt="Header avatar"></img>
      <p className="profile__name"> Terrence Tegegne </p>
    </div>
  );
}
export default SideBar;
