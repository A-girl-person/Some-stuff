"use client";
import Link from "next/link";
import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_COUNTRY = gql`
  query countries($filter: CountryFilterInput) {
    countries(filter: $filter) {
      code
      name
    }
  }
`;

const CountryList = ({ params: { code } }) => {
  const { loading, error, data } = useQuery(GET_COUNTRY, {
    variables: {
      filter: {
        continent: {
          eq: code,
        },
      },
    },
  });
  if (loading) return "Loading...";
  if (error) return "Error";

  console.log(code);
  return (
    <div>
      {data?.countries.map((count) => (
        <Link href={`/detail/${count.code}`}>
          <li>{count.name}</li>
          {console.log(data.countries.continent)}
        </Link>
      ))}
    </div>
  );
};

export default CountryList;
