import Logo from "../assets/Logo.svg";
import Avatar from "../assets/Avatar.svg";
import "../blocks/Header.css";

function Header({ weatherData, onOpenModal }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <div className="header">
      <div className="header__container ">
        <img className="header__logo" src={Logo} alt="Header logo"></img>
        <p className="header__date-and-location ">
          {/* Render date and location */}
          {currentDate}, {weatherData?.city}
        </p>
      </div>
      <div className="header__container ">
        <button
          type="button"
          className="header__add-clothes-button"
          onClick={onOpenModal}
        >
          + Add clothes
        </button>
        <p className="header__profile-name"> Terrence Tegegne </p>
        <img className="header__avatar" src={Avatar} alt="Header avatar"></img>
      </div>
    </div>
  );
}

// ReactDOM.render(
//   <>
//     <Header />
//   </>,
//   document.querySelector("#root")
// );

export default Header;
