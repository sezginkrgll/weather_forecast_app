import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAPIconfig } from "../context/APIconfigContext";

import CITIES from "../data/Cities";
import { useCity } from "../context/GeocodingContext";

function Form() {
  const { COUNTRY_CODE } = useAPIconfig();
  const { setCity } = useCity();
  const [cityName, setCityName] = useState("Adana");

  async function getData() {
    try {
      const { data } = await axios(
        `http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${COUNTRY_CODE}&limit=1&appid=cacd1cb297622a011aa2ca1ce49d48d0`
      );
      setCity({ lat: data[0].lat, lon: data[0].lon });
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getData();
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
