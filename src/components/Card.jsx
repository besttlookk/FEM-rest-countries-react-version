import React from "react";
import { Link } from "react-router-dom";

const Card = ({ country }) => {
  const { name, population, region, capital, flags, alpha3Code } = country;

  return (
    <Link
      to={`/detail?country=${alpha3Code}`}
      className="block overflow-hidden transform bg-white rounded-md cursor-pointer shadow-around dark:bg-dm-secondary hover:scale-105"
    >
      {" "}
      <>
        <div className="" style={{ height: "160px" }}>
          <img
            alt="country flag"
            src={flags.png}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="px-6 pt-6 pb-12 font-primary">
          <p className="mb-5 text-xl font-extrabold dark:text-white md:text-2xl">
            {name}
          </p>
          <p className="text-lg">
            <span className="font-bold dark:text-white">Population:</span>
            <span className="text-gray-600 dark:text-gray-100">
              {" "}
              {population}
            </span>{" "}
          </p>
          <p className="text-lg">
            <span className="font-bold dark:text-white">Region:</span>{" "}
            <span className="text-gray-600 dark:text-gray-100">{region}</span>
          </p>
          <p className="text-lg">
            <span className="font-bold dark:text-white">Capital:</span>{" "}
            <span className="text-gray-600 dark:text-gray-100">{capital}</span>
          </p>
        </div>
      </>
    </Link>
  );
};

export default Card;
