import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext.jsx";
import Logo from "../assets/Logo.svg";
import Avatar from "../assets/Avatar.svg";
import ToggleSwitch from "./ToggleSwitch.jsx";
import "../blocks/Header.css";

function Header({ weatherData, onOpenModal }) {
  const navigate = useNavigate();
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const { currentTemperatureUnit, handleToggleSwitch } = useContext(
    CurrentTemperatureUnitContext
  );

  return (
    <div className="header">
      <div className="header__container ">
        <img
          className="header__logo"
          src={Logo}
          alt="Header logo"
          onClick={() => navigate("/")}
        ></img>
        <p className="header__date-and-location ">
          {/* Render date and location */}
          {currentDate}, {weatherData?.city}
        </p>
      </div>
      <div className="header__container ">
        <ToggleSwitch
          onChange={handleToggleSwitch}
          isChecked={currentTemperatureUnit === "C"}
        />
        <button
          type="button"
          className="header__add-clothes-button"
          onClick={onOpenModal}
        >
          + Add clothes
        </button>
        <p
          className="header__profile-name"
          onClick={() => navigate("/profile")}
        >
          {" "}
          Terrence Tegegne{" "}
        </p>
        <img
          className="header__avatar"
          src={Avatar}
          alt="Header avatar"
          onClick={() => navigate("/profile")}
        ></img>
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
