import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAPIconfig } from "../context/APIconfigContext";
import { useCity } from "../context/GeocodingContext";
function Weather() {
  const { API_KEY, COUNTRY_CODE } = useAPIconfig();
  const [forecasts, setForecasts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { city } = useCity();
  const iconURL = (urlText) => `https:${urlText}`;
  const days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];
  async function getData() {
    try {
      const { data } = await axios(
        `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city.lat},${city.lon}&days=8&aqi=no&alerts=no&lang=${COUNTRY_CODE}`
      );
      setForecasts(data);
    } catch (e) {
      setForecasts(e);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, [city]);
  return (
    <>
      {isLoading && <div>Loading...</div>}
      {forecasts && (
        <div className="container">
          <ul>
            {forecasts.forecast.forecastday.map((item, index) => (
              <li key={index} className={index === 0 ? "active" : ""}>
                <pre>
                  <div>{days[Number(new Date(item.date).getDay())]}</div>
                  <img src={iconURL(item.day.condition.icon)} alt="" />
                  <div>
                    {item.day.maxtemp_c}°&nbsp;{item.day.mintemp_c}°
                  </div>
                </pre>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default Weather;
