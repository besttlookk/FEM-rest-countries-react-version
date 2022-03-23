import React, { useContext, useEffect, useState } from "react";
import { Card, Filter, Search, Loader } from "../components";
import { AppContext } from "../contexts/appContext";

const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const [option, setOption] = useState("All");
  const [filteredCountries, setFilteredCountries] = useState([]);

  const { countries, loading } = useContext(AppContext);

  useEffect(() => {
    setFilteredCountries(countries);
  }, [countries]);

  useEffect(() => {
    if (option === "All" && searchInput === "") setFilteredCountries(countries);
    else if (option === "All" && searchInput !== "") {
      setFilteredCountries(
        countries.filter((country) =>
          country.name.toLowerCase().includes(searchInput)
        )
      );
    } else if (option !== "All" && searchInput === "") {
      setFilteredCountries(
        countries.filter((country) => country.region === option)
      );
    } else {
      setFilteredCountries(
        countries.filter((country) => {
          return (
            country.name.toLowerCase().includes(searchInput) &&
            country.region === option
          );
        })
      );
    }
  }, [countries, searchInput, option]);

  return (
    <>
      {/* ROW1 : SEARCH + FILTER */}
      <div className="flex flex-col space-y-4 md:flex-row md:justify-between md:items-center md:space-y-0 font-primary">
        <Search
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          setFilteredCountries={setFilteredCountries}
          countries={countries}
        />
        <Filter setOption={setOption} />
      </div>
      <section className="px-0 py-10 md:px-0">
        <div
          className="grid grid-cols-1 gap-12 card-container sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 "
          id="card-container"
        >
          {loading ? (
            <Loader />
          ) : (
            filteredCountries.map((country) => (
              <Card key={country.alpha3Code} country={country} />
            ))
          )}
        </div>
        {countries.length === 0 && filteredCountries.length === 0 && (
          <p className="text-2xl font-semibold dark:text-white text-lm-text">
            No Result Found. Try Again!
          </p>
        )}
      </section>
    </>
  );
};

export default Home;
