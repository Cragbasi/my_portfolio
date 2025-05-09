import React, { useState } from "react";

export const CurrentTemperatureUnitContext = React.createContext();

export const CurrentTemperatureUnitProvider = ({ children }) => {
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const handleToggleSwitch = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  const convertToF = (temp) => temp;
  const convertToC = (temp) => Math.round(((temp - 32) * 5) / 9);

  const tempUnitConversion = {
    F: {
      temperature: (temp) => convertToF(temp),
    },
    C: {
      temperature: (temp) => convertToC(temp),
    },
  };

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{
        currentTemperatureUnit,
        handleToggleSwitch,
        tempUnitConversion,
      }}
    >
      {children}
    </CurrentTemperatureUnitContext.Provider>
  );
};
