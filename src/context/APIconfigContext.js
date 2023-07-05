import { createContext, useContext } from "react";

const APIconfigContext = createContext();

export const APIkeyProvider = ({ children }) => {
  const API_CONFIG = {
    API_KEY: "cb90bc1c552e454d8b3175732230407",
    COUNTRY_CODE: "tr",
  };

  return (
    <APIconfigContext.Provider value={API_CONFIG}>
      {children}
    </APIconfigContext.Provider>
  );
};

export const useAPIconfig = () => useContext(APIconfigContext);
