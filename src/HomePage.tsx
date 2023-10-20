import { CountriesGrid } from "./components/CountriesGrid";
import { useState } from "react";
import Filter from "./components/Filter";
import getCountries from "../src/api/getCountries";
import Error from "./components/Error";
import { useQuery } from "@tanstack/react-query";

export function HomePage() {
  const [search, setSearch] = useState<string>("");
  const [region, setRegion] = useState<string>("");

  // setting up the query
  const { isLoading, isError, data } = useQuery({
    queryKey: ["Countries"],
    queryFn: getCountries,
  });

  if (isError) {
    return <Error />;
  }

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
        loading={isLoading}
        countries={data!}
        region={region}
        search={search}
      />
    </>
  );
}
