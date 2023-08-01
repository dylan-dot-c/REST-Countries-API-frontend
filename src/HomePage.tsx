import { CountriesGrid } from "./components/CountriesGrid";
import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import axios from "axios";
import { CountryFirst } from "./models";

export function HomePage() {
  const [countries, setCountries] = useState<CountryFirst[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState<string>("");
  const [region, setRegion] = useState<string>("");

  useEffect(() => {
    async function fetchData() {
      const endpoint =
        "https://restcountries.com/v3.1/all?fields=capital,name,population,flags,region";
      setLoading(true);
      try {
        const response = await axios.get(endpoint);
        const data: CountryFirst[] = response.data;

        setCountries(data);
        setLoading(false);
      } catch (err: any) {
        console.log(err);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <Filter
        search={search}
        setSearch={setSearch}
        region={region}
        setRegion={setRegion}
      />
      {/*Grid */}
      <CountriesGrid
        loading={loading}
        countries={countries}
        region={region}
        search={search}
      />
    </>
  );
}
