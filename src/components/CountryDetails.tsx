import { useParams, Link } from "react-router-dom";
import Codes, { languageCodes } from "../Codes";
import getCountryDetails from "../api/getCountryDetails";
import Button from "./Button";
import Error from "../components/Error";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "./Skeleton";

const CountryDetails: React.FC = () => {
  // getting name from dynamic url
  const { name } = useParams<string>();

  // setting up queryFn and queryKeys
  const { data, isError, isLoading } = useQuery({
    queryKey: ["country", name],
    queryFn: async () => await getCountryDetails(name!),
  });

  var currency: string = "";
  var keys: string[] = [];
  console.log(data);

  if (isError) {
    return <Error />;
  }

  if (isLoading) {
    return <Skeleton />;
  }

  currency = Object.keys(data?.currencies!)[0];
  keys = Object.keys(data!.languages);

  return (
    <div className='mt-24'>
      <Button />
      <div className='lg:flex lg:gap-20 lg:items-center'>
        <div className='w-full lg:w-2/5'>
          <img
            src={data?.flags.svg}
            className='w-full'
            alt={`flag for ${name}`}
            loading='lazy'
          />
        </div>

        <div className='w-full lg:w-2/5'>
          <h2 className='mt-8'>{data?.name.common}</h2>

          <div className='space-y-4 mt-4 lg:mt-0 details lg:flex lg:justify-between'>
            <div>
              <p>
                <b>Native Name: </b>
                {data?.name.common}
              </p>
              <p>
                <b>Population: </b>
                {data?.population.toLocaleString()}
              </p>
              <p>
                <b>Region: </b>
                {data?.region}
              </p>
              <p>
                <b>Sub Region: </b>
                {data?.subregion}
              </p>
              <p>
                <b>Capital: </b>
                {data?.capital}
              </p>
            </div>

            <div>
              <p>
                <b>Top Level Domain: </b>
                {data?.tld}
              </p>
              <p>
                <b>Currencies: </b>
                {data?.currencies[currency].name}
              </p>
              <p>
                <b>Languages: </b>
                {keys
                  .map((key) => {
                    return languageCodes[key];
                  })
                  .join(", ")}
              </p>
            </div>
          </div>

          <div className='lg:flex lg:gap-4 lg:mt-8 lg:items-center mt-6'>
            <h2 className='text-lg font-semibold whitespace-nowrap'>
              Border Countries:
            </h2>

            <div className='flex flex-wrap gap-5'>
              {data?.borders.length === 0 ? (
                <h1 className='text-center  text-gray-400 w-full font-normal text-2xl -mt-0 lg:-mt-2'>
                  No Borders
                </h1>
              ) : (
                data?.borders.map((border, index) => {
                  const countryName = Codes[border];

                  return (
                    <Link to={`/country/${countryName}`} key={index}>
                      <span
                        className=' py-1 px-4 text-center shadow-sm text-sm shadow-lt-dark-gray
                                dark:shadow-dk-very-dark-blue
                                dark:text-mt-white dark:bg-dk-dark-blue bg-white hover:cursor-pointer'>
                        {countryName}
                      </span>
                    </Link>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
