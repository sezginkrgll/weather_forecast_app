import { createContext, useContext, useState } from "react";

const GeocodingContext = createContext();

export const GeocodingProvider = ({ children }) => {
  const [city, setCity] = useState({ lat: 36.9863599, lon: 35.3252861 });

  const values = {
    city,
    setCity,
  };

  return (
    <GeocodingContext.Provider value={values}>
      {children}
    </GeocodingContext.Provider>
  );
};

export const useCity = () => useContext(GeocodingContext);
