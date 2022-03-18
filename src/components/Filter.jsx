import React, { useState } from "react";

const Filter = ({ setOption }) => {
  const [active, setActive] = useState(false);
  const [label, setLabel] = useState("Filter by Region");

  const handleOptionSelect = (e) => {
    if (e.target.textContent === "All") {
      setLabel("Filter by Region");
      setOption("All");
    } else {
      setLabel(e.target.textContent);
      setOption(e.target.textContent);
    }
    setActive((prev) => !prev);
  };
  return (
    <div className="z-40 filter h-14">
      <div
        className={`filter__field dark:bg-dm-secondary dark:text-white `}
        id="filter-field"
        onClick={() => setActive((prev) => !prev)}
      >
        <p className="filter__text" id="filter-text">
          {label}
        </p>
        <i
          className={`fa fa-angle-${active ? "up" : "down"} dark:text-white`}
          id="caret"
        ></i>
      </div>
      <ul
        className={`filter__list dark:bg-dm-secondary dark:text-white ${
          active ? "" : "hide"
        }`}
        id="filter-list"
        onClick={handleOptionSelect}
      >
        <li className="filter__option">All</li>
        <li className="filter__option">Africa</li>
        <li className="filter__option">Americas</li>
        <li className="filter__option">Asia</li>
        <li className="filter__option">Europe</li>
        <li className="filter__option">Oceania</li>
      </ul>
    </div>
  );
};

export default Filter;
