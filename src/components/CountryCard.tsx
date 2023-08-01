// import React from "react";

import { useNavigate } from "react-router-dom";
// import Country from ''
import { CountryFirst } from "../models";

interface Props {
  index: number;
  country: CountryFirst;
}
export function CountryCard({ index, country }: Props) {
  const navigate = useNavigate();

  return (
    <div
      className="hover:cursor-pointer hover:shadow-black mb-6 w-5/6 lg:w-full mx-auto bg-mt-white rounded-lg shadow-lg shadow-lt-dark-gray dark:bg-dk-dark-blue dark:shadow-dk-very-dark-blue dark:text-mt-white overflow-hidden"
      key={index}
      onClick={() => navigate(`/country/${country.name.common}`)}
    >
      <img
        src={country.flags.svg}
        className="w-full lg:h-52"
        alt={country.flags.alt}
      />
      <div className="p-4 lg:px-8 lg:pt-8 lg:pb-8" key={Date.now()}>
        <h2>{country.name.common}</h2>
        <p>
          <b>Population: </b>
          {country.population.toLocaleString()}
        </p>
        <p>
          <b>Capital: </b>
          {country.capital}
        </p>
        <p>
          <b>Region: </b>
          {country.region}
        </p>
      </div>
    </div>
  );
}
