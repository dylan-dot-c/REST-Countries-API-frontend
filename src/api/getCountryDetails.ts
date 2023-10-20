import axios from "axios";
import Country from "../models";

export default async function getCountryDetails(countryName: string) {
  const endpoint = `https://restcountries.com/v3.1/name/${countryName}?fields=capital,name,population,flags,region,subregion,tld,currencies,languages,borders`;

  try {
    const response = await axios.get(endpoint);
    const data: Country = response.data[0];

    return data;
  } catch (err: any) {
    console.log(err);
    throw "Cannot get data!";
  }
}
