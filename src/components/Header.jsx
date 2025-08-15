import { Link } from "react-router-dom";
import "../blocks/Header.css";
import ToggleSwitch from "./ToggleSwitch.jsx";

function Header({ isChecked, setIsChecked, onHomeClick }) {
  return (
    <div className="header">
      <div className="header__container ">
        <Link to="/confahm">
          <div className="header__logo" alt="Header logo"></div>
        </Link>

        <nav className="header__nav-bar ">
          <Link to="/">
            <button className="header__home-button" onClick={onHomeClick}>
              {" "}
              Home
            </button>
          </Link>
          <ToggleSwitch
            isChecked={isChecked}
            setIsChecked={setIsChecked}
          ></ToggleSwitch>
        </nav>
      </div>
    </div>
  );
}

export default Header;
