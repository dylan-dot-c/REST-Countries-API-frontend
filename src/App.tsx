import { useState, useEffect } from 'react'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import './App.css'

import Header from './components/Header'
import Filter from './components/Filter'

import axios from 'axios'
import CountryDetails from './components/CountryDetails'
// import 
import {CountryFirst} from "./models"
import Skeleton from './components/Skeleton'


function PlaceHolder() {

  const [countries, setCountries] = useState<CountryFirst[]>([])
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState<string>("")
  const [region, setRegion] = useState<string>("")


  useEffect( () => {
    
    async function fetchData() {
      const endpoint = "https://restcountries.com/v3.1/all?fields=capital,name,population,flags,region"
      setLoading(true)
    try {
      const response = await axios.get(endpoint)
      const data: CountryFirst[] = response.data

      setCountries(data)
      setLoading(false)

    }catch(err: any) {
      console.log(err)
    }
    }

    fetchData()

  }, [])

  return (
    <>
      <Filter search={search} setSearch={setSearch} region={region} setRegion={setRegion} />
      {/*Grid */}
      <div className=''>
        {
          loading ? (
            <>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            </>
          ) : // Ensure that region and search have default values in case they are undefined or null
          
          
          (
            countries.filter((country) => {
              const regionFilter = region || "";
          const searchFilter = search ? search.toLowerCase() : "";
              const countryName = country.name.common.toLowerCase();
              const regionMatch = country.region === regionFilter;
              const searchMatch = countryName.includes(searchFilter);
          
              // Filter based on both region and search conditions
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
            }).map((country, index) => {
              return (
                <div
                  className='mb-6 w-5/6 mx-auto bg-mt-white rounded-lg shadow-lg shadow-lt-dark-gray dark:bg-dk-dark-blue dark:shadow-dk-very-dark-blue dark:text-mt-white overflow-hidden'
                  key={index}
                  onClick={() => navigate(`/country/${country.name.common}`)}
                >
                  <img src={country.flags.svg} className="w-full" alt={country.flags.alt} />
                  <div className='p-4'>
                    <h2>{country.name.common}</h2>
                    <p><b>Population: </b>{country.population.toLocaleString()}</p>
                    <p><b>Capital: </b>{country.capital}</p>
                    <p><b>Region: </b>{country.region}</p>
                  </div>
                </div>
              )
            })
          )
          
        }
      </div>
    </>
  )
}

function App() {
  // const [count, setCount] = useState(0)

  

  return (
    <BrowserRouter>
          <Header />

      <Routes>
        <Route path='/' element={<PlaceHolder />} />
        <Route path='/country/:name' element={<CountryDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
