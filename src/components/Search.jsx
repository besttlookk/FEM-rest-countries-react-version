import React from "react";

const Search = ({
  setSearchInput,
  searchInput,
  setFilteredCountries,
  countries,
}) => {
  const handleChange = (e) => {
    setSearchInput(e.target.value);
    if (e.target.value === "") {
      setFilteredCountries(countries);
    } else {
      setFilteredCountries(
        countries.filter((country) =>
          country.name.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    }
  };
  return (
    <form
      className="relative w-full overflow-hidden border-green-400 rounded-lg h-14 border-3 shadow-around md:w-96"
      id="form"
      onSubmit={(e) => e.preventDefault()}
    >
      <i className="absolute text-xl text-gray-400 transform fas fa-magnifying-glass top-2/4 left-10 -translate-y-2/4"></i>
      <input
        className="inline-block w-full h-full py-2 pl-24 pr-12 outline-none dark:bg-dm-secondary dark:text-white"
        type="text"
        name="input"
        id="input"
        placeholder="Search for a country..."
        value={searchInput}
        onChange={handleChange}
      />
      <i
        className={`absolute text-lg text-gray-400 transform fas fa-xmark top-2/4 right-5 -translate-y-2/4 cursor-pointer  hover:scale-105 active:scale-95 `}
        onClick={() => setSearchInput("")}
        style={{ display: searchInput ? "block" : "none" }}
      ></i>
    </form>
  );
};

export default Search;
