import Link from "next/link";
import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_CONTINENTS = gql`
  query Continents {
    continents {
      code
      name
    }
  }
`;

const ContinentList = () => {
  const { loading, error, data } = useQuery(GET_CONTINENTS);

  if (loading) return "Loading...";
  if (error) return error.message;
  return (
    <div>
      {data?.continents.map((continent) => (
        <Link href={`/continents/${continent.code}`}>
          <li>{continent.name}</li>
          {console.log(continent.code)}
        </Link>
      ))}
    </div>
  );
};

export default ContinentList;
