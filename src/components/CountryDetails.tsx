import { useParams, useNavigate} from 'react-router-dom'
import {useState, useEffect} from 'react'

import Country from '../models'
import axios from 'axios'
import Codes, {languageCodes} from '../Codes'
import {BsArrowLeft} from 'react-icons/bs'

const CountryDetails: React.FC = () => {
    const [country, setCountry] = useState<Country | null>(null)
    const {name} = useParams<string>()

    const navigate = useNavigate()

    useEffect( () => {
        async function fetchData() {
            const endpoint = `https://restcountries.com/v3.1/name/${name}?fields=capital,name,population,flags,region,subregion,tld,currencies,languages,borders`
      
          try {
            const response = await axios.get(endpoint)
            const data: Country = response.data[0]
      
            setCountry(data)
      
          }catch(err: any) {
            console.log(err)
          }
          }
      
          fetchData()
      
        }, [])

        var currency:string = "";
        var keys: string[] = [];
    
        // useEffect( () => {
        //     currency = Object.keys(country?.currencies!)[0]
        // }, [country])

        if (!country) {
            // Country data is not yet available or failed to fetch
            return <p>Loading...</p>;
          }else {
            currency = Object.keys(country?.currencies!)[0]

            keys = Object.keys(country.languages)

          }
        

    
  return (
    <div className='mt-24'>

        <button className='dark:bg-dk-dark-blue flex gap-2 items-center my-6 mb-6 border-lg rounded shadow-md px-4 py-1 shadow-black dark:text-lt-light-gray'
            onClick={() => {navigate('/')}}
        >
            <span>
                <BsArrowLeft />
            </span>
            Back</button>
    <img src={country?.flags.svg} className='w-full' alt="" />

    <div>
        <h2 className='mt-8'>{country?.name.common}</h2>

        <div className='space-y-4 mt-4 details'>
            <div>
                <p><b>Native Name: </b>{country?.name.common}</p>
                <p><b>Population: </b>{country?.population}</p>
                <p><b>Region: </b>{country?.region}</p>
                <p><b>Sub Region: </b>{country?.subregion}</p>
                <p><b>Capital: </b>{country?.capital}</p>
            </div>

            <div>
                <p><b>Top Level Domain: </b>{country?.tld}</p>
                <p><b>Currencies: </b>{country?.currencies[currency].name}</p>
                <p><b>Languages: </b>{
                    
                    keys.map((key) => {
                        return languageCodes[key]
                    }).join(', ')
                }</p>
            </div>

            <div>
                <h2 className='text-lg font-semibold'>Border Countries:</h2>

                <div className="flex flex-wrap gap-5 p-4">
                {
                    country.borders.length === 0 ? <h1 className='text-center  text-gray-400 w-full font-normal text-2xl -mt-6'>No Borders</h1> :
                    
                    country?.borders.map( (border, index) => {
                    const countryName = Codes[border]

                        
                        return (
                            <span key={index}
                                
                                className=' py-1 px-4 text-center shadow-md text-sm shadow-dk-very-dark-blue dark:text-mt-white dark:bg-dk-dark-blue bg-white'
                            >
                                {countryName}
                            </span>
                        )
                    })
                }
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default CountryDetails
