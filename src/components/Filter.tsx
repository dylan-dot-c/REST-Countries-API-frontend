// import React from 'react'

import {AiOutlineSearch} from "react-icons/ai"

const regions = ["Filter by Region", "Africa", "Americas", "Asia", "Europe", "Oceania"]

interface Props {
    search:string,
    setSearch: React.Dispatch<React.SetStateAction<string>>
    region: string,
    setRegion: React.Dispatch<React.SetStateAction<string>>
}

const Filter = ({search, setSearch, region, setRegion} : Props) => {
  return (
    <form className="mt-20 mb-8">
        <div className="relative mb-6">
            <span
                className="absolute h-full flex items-center text-gray-400 dark:text-mt-white pl-4"
            ><AiOutlineSearch size={20} /></span>
            <input type="text" name="country" value={search}
                onChange={(e) => setSearch(e.target.value)}
            id="country" className="px-4 py-4 pl-12 w-full  shadow-md shadow-lt-dark-gray dark:shadow-dk-very-dark-blue rounded-md dark:bg-dk-dark-blue dark:text-lt-light-gray" placeholder="Search for a country..." />
        </div>

        <div>
            <select name="region" value={region} onChange={(e) => setRegion(e.target.value)} id="region" className="px-5 py-3 shadow-lg shadow-lt-dark-gray rounded-md dark:bg-dk-dark-blue dark:shadow-dk-very-dark-blue dark:text-mt-white">
                
                {
                    regions.map( (region, index) => {
                        return (
                            <option
                                value={index === 0 ? "" : region}
                                key={index}
                            >{region}</option>
                        )
                    })
                }
            </select>
        </div>
    </form>
  )
}

export default Filter
