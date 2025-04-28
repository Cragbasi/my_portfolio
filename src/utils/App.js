import React, { useState, useEffect } from "react";
import { weatherApi } from "./weatherApi.js";
import { coordinate, APIkey } from "./constants.js";
import Header from "../components/Header.jsx";

function App() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    console.log("useEffect is running");
    // API call goes here
    const api = new weatherApi({
      baseUrl: `https://api.openweathermap.org/data/2.5/weather?lat=${coordinate.latitude}&lon=${coordinate.longitude}&units=imperial&appid=${APIkey}`,
    });

    console.log("API instance created");
    api
      .getInfo()
      .then((res) => {
        console.log("API response:", res);
        setWeatherData(res);
      })
      .catch((err) => {
        console.error("API error:", err); // log the error to the console
      });
  }, []);

  return (
    <div div className="page">
      <Header weatherData={weatherData} />
      {weatherData && (
        <div>
          {weatherData && (
            <div>
              <p>City: {weatherData.city}</p>
              <p>Temperature: {weatherData.temperature}</p>
              <p>Weather Type: {weatherData.weatherType}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
