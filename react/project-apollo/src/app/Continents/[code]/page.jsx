import React from "react";
import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_COUNTRY = gql`
  query countries {
    countries {
      code
      name
    }
  }
`;

const CountryList = ({ params: { code } }) => {
  const { loading, error, data } = useQuery(GET_COUNTRY);
  if (loading) return "Loading...";
  if (error) return "Error";
  console.log(code);
  return (
    <div>
      {data?.countries.map((count) => (
        <Link href={`/continents/${country.code}`}>
          <li>{count.name}</li>
          {console.log(data)}
        </Link>
      ))}
    </div>
  );
};

export default CountryList;
