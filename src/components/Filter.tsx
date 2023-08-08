// import React from 'react'

import { AiOutlineSearch } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";

const regions = [
  "Filter by Region",
  "Africa",
  "Americas",
  "Asia",
  "Europe",
  "Oceania",
];

interface Props {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  region: string;
  setRegion: React.Dispatch<React.SetStateAction<string>>;
}

const Filter = ({ search, setSearch, region, setRegion }: Props) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  function toggleModal() {
    setShowModal(!showModal);
  }

  const updateRegion = (region: string) => {
    if (region == regions[0]) {
      setRegion("");
    } else {
      setRegion(region);
    }
  };

  return (
    <form className="mt-20 lg:mt-28 mb-8 lg:flex lg:justify-between">
      <div className="relative mb-6 lg:w-2/5">
        <span className="absolute h-full flex items-center text-gray-400 dark:text-mt-white pl-4">
          <AiOutlineSearch size={20} />
        </span>
        <input
          type="text"
          name="country"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          id="country"
          className="px-4 py-4 pl-12 w-full  shadow-md shadow-lt-dark-gray dark:shadow-dk-very-dark-blue rounded-md dark:bg-dk-dark-blue dark:text-lt-light-gray"
          placeholder="Search for a country..."
        />
      </div>

      <div className="w-[200px]" onClick={toggleModal}>
        <div className="px-5 py-3 shadow-lg shadow-lt-dark-gray rounded-md dark:bg-dk-dark-blue dark:shadow-dk-very-dark-blue dark:text-mt-white flex items-center gap-5 justify-between">
          <span>{region == "" ? "Filter By Region" : region}</span>
          <span className={`${showModal && "rotate-180"}`}>
            <MdKeyboardArrowDown size={25} />
          </span>
        </div>

        <div
          className={`absolute z-10 dark:bg-dk-dark-blue bg-lt-light-gray translate-y-1 w-[200px] px-5 py-3 rounded-lg shadow-md dark:shadow-dk-very-dark-blue shadow-lt-dark-gray ${
            showModal ? "block" : "hidden"
          }`}
        >
          <ul className="space-y-2">
            {regions.map((region, index) => {
              return (
                <li
                  key={index}
                  className="dark:text-lt-light-gray hover:cursor-pointer text-lt-very-dark-blue font-semibold"
                  onClick={() => updateRegion(region)}
                >
                  {region}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </form>
  );
};

export default Filter;
