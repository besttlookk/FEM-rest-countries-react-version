import { createContext, useEffect, useState } from "react";
import { getAllCountries } from "../helpers/api-utils";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [countryArr, setCountryArr] = useState([]);
  const [alphaCodeArr, setAlphaCodeArr] = useState([]);

  useEffect(() => {
    getAllCountries().then((data) => {
      setCountries(data);
      setLoading(false);
    });
  }, []);

  const values = {
    countries,
    loading,
    countryArr,
    setCountryArr,
    alphaCodeArr,
    setAlphaCodeArr,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppProvider;
