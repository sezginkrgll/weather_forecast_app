import React, { useEffect, useState } from "react";
import CITIES from "../data/Cities";
import { useCity } from "../context/GeocodingContext";

function Form() {
  const { setCity } = useCity();
  const [cityName, setCityName] = useState("Adana");

  useEffect(() => {
    const filtered = CITIES.filter((item) => item.name === cityName);
    setCity({ lat: filtered[0].geocoding.lat, lon: filtered[0].geocoding.lon });

  }, [cityName]);

  const onChangeInput = (event) => {
    setCityName(event.target.value);
  };

  return (
    <>
      <select
        name="cities"
        id="cities"
        onChange={onChangeInput}
        defaultValue={cityName}
      >
        {CITIES.map((item) => (
          <option key={item.zipCode} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
    </>
  );
}

export default Form;
