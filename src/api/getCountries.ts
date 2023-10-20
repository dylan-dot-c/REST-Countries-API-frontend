import axios from "axios";
import { CountryFirst } from "../models";

export default async function getCountries() {
  const endpoint =
    "https://restcountries.com/v3.1/all?fields=capital,name,population,flags,region";

  try {
    const response = await axios.get(endpoint);
    const data: CountryFirst[] = response.data;
    console.log(data);
    return data;
  } catch (err: any) {
    console.log(err);
    throw "Cannot get data";
  }
}
