import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Loader } from "../components";
import { AppContext } from "../contexts/appContext";
import { getCountryDetail } from "../helpers/api-utils";

const Detail = () => {
  const [loading, setLoading] = useState(true);
  const [country, setCountry] = useState([]);
  const [borderCountries, setBorderCountries] = useState([]);
  const [languages, setLanguages] = useState([]);

  //! get queryString from URL
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const countryAlpha = query.get("country");

  // ! Getting list of all country just to find the name of border-countries
  const {
    countries,
    setAlphaCodeArr,
    setCountryArr,
    countryArr,
    alphaCodeArr,
  } = useContext(AppContext);

  useEffect(() => {
    setBorderCountries([]);

    const finddBorderCountries = (country) => {
      const borderCodeArr = country.borders;
      if (borderCodeArr) {
        const borderCountryArr = countries.filter((country) =>
          borderCodeArr.includes(country.alpha3Code)
        );
        return borderCountryArr;
      } else {
        return [];
      }
    };

    const findLanguages = (country) => {
      return country.languages.map((item) => {
        return item.name;
      });
    };

    async function fetchData() {
      const countryDetail = await getCountryDetail(countryAlpha);
      const languagesArr = findLanguages(countryDetail);

      setCountry([countryDetail]);
      setLanguages(languagesArr);

      setCountryArr([...countries, countryDetail]);
      setAlphaCodeArr([...alphaCodeArr, countryAlpha]);

      const borderCountries = finddBorderCountries(countryDetail);
      setBorderCountries(borderCountries);

      setLoading(false);
    }

    const isDeatilDataAvailable = alphaCodeArr.includes(countryAlpha);

    if (isDeatilDataAvailable) {
      const storedDetail = countryArr.find(
        (country) => country.alpha3Code === countryAlpha
      );
      setCountry([storedDetail]);
      setLoading(false);

      const borderCountries = finddBorderCountries(storedDetail);
      const languagesArr = findLanguages(storedDetail);

      setBorderCountries(borderCountries);
      setLanguages(languagesArr);
    } else {
      fetchData();
    }
  }, [
    countryAlpha,
    countries,
    alphaCodeArr,
    countryArr,
    setAlphaCodeArr,
    setCountryArr,
  ]);

  return (
    <>
      <div>
        {/* BACK BUTTON */}
        <Link
          className="inline-flex items-center px-8 py-1 transform bg-white rounded-md shadow-around text-lm-text dark:bg-dm-secondary dark:text-dm-text hover:scale-105 "
          to="/"
        >
          {" "}
          <span className="text-xl font-bold">&#x2190;</span>
          <span className="ml-2">Back</span>
        </Link>
      </div>

      {/* content */}
      {loading ? (
        <Loader />
      ) : (
        country.map((detail) => (
          <div
            key={detail.alpha3Code}
            className="grid grid-cols-1 gap-6 mt-16 md:grid-cols-2 md:gap-24 lg:gap-28"
          >
            <div className="h-64 md:h-96">
              <img
                className="object-cover w-full h-full"
                alt="country-flag"
                src={detail.flags.svg}
              />
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <p className="text-xl font-extrabold col-span-full dark:text-white md:2xl">
                {detail.name}
              </p>
              <div className="flex flex-col space-y-2">
                <p>
                  <span className="mr-2 font-bold text-lm-text dark:text-white">
                    Native Name:
                  </span>
                  <span className="text-gray-700 dark:text-gray-100">
                    {detail.nativeName}
                  </span>
                </p>
                <p>
                  <span className="mr-2 font-bold text-lm-text dark:text-white">
                    Population:
                  </span>
                  <span className="text-gray-700 dark:text-gray-100">
                    {detail.population}
                  </span>
                </p>
                <p>
                  <span className="mr-2 font-bold text-lm-text dark:text-white">
                    Region:
                  </span>
                  <span className="text-gray-700 dark:text-gray-100">
                    {detail.region}
                  </span>
                </p>
                <p>
                  <span className="mr-2 font-bold text-lm-text dark:text-white">
                    Sub Region:
                  </span>
                  <span className="text-gray-700 dark:text-gray-100">
                    {detail.subregion}
                  </span>
                </p>
                <p>
                  <span className="mr-2 font-bold text-lm-text dark:text-white">
                    Capital:
                  </span>
                  <span className="text-gray-700 dark:text-gray-100">
                    {detail.capital}
                  </span>
                </p>
              </div>
              <div className="flex flex-col space-y-2">
                <p>
                  <span className="mr-2 font-bold text-lm-text dark:text-white">
                    Top Level Domain:
                  </span>
                  <span className="text-gray-700 dark:text-gray-100">
                    {detail.topLevelDomain[0]}
                  </span>
                </p>
                <p>
                  <span className="mr-2 font-bold text-lm-text dark:text-white">
                    Currencies:
                  </span>
                  <span className="text-gray-700 dark:text-gray-100">
                    {detail.currencies ? detail.currencies[0].name : ""}
                  </span>
                </p>
                <p>
                  <span className="mr-2 font-bold text-lm-text dark:text-white">
                    languages:
                  </span>
                  <span
                    className="text-gray-700 dark:text-gray-100"
                    id="languages"
                  >
                    {languages.length > 0 ? languages.join(", ") : ""}
                  </span>
                </p>
              </div>
              <div className="col-span-full">
                {borderCountries.length > 0 && (
                  <p className="text-xl font-extrabold dark:text-white">
                    Border Countries{" "}
                  </p>
                )}

                <div className="flex flex-wrap gap-3 mt-3" id="neighbours">
                  {borderCountries.map((country) => (
                    <Link
                      to={`/detail?country=${country.alpha3Code}`}
                      className="px-6 py-2 text-gray-700 transform rounded-md cursor-pointer shadow-around hover:scale-105 active:translate-y-px dark:text-white dark:bg-dm-secondary"
                      key={country.alpha2Code}
                    >
                      <p>{country.name}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default Detail;
