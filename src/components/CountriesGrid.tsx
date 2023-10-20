// import React from "react";

import { CountryFirst } from "../models";
import Preloader from "./Preloader";
import { CountryCard } from "./CountryCard";

interface Props {
  loading: boolean;
  countries: CountryFirst[];
  region: string;
  search: string;
}
export function CountriesGrid({ loading, countries, region, search }: Props) {
  return (
    <div
      className='lg:grid lg:grid-cols-4 lg:gap-16 grid-cols-1 grid gap-6'
      key={Date.now()}>
      {loading ? (
        <Preloader /> // Ensure that region and search have default values in case they are undefined or null
      ) : (
        countries
          .filter((country) => {
            const regionFilter = region || "";
            const searchFilter = search ? search.toLowerCase() : "";
            const countryName = country.name.common.toLowerCase();
            const regionMatch = country.region === regionFilter;
            const searchMatch = countryName.includes(searchFilter); // Filter based on both region and search conditions

            if (regionFilter && searchFilter) {
              return regionMatch && searchMatch;
            } else if (regionFilter) {
              return regionMatch;
            } else if (searchFilter) {
              return searchMatch;
            } else {
              // If neither region nor search has a value, return true for all countries
              return true;
            }
          })
          .map((country, index) => {
            return <CountryCard index={index} key={index} country={country} />;
          })
      )}
    </div>
  );
}
