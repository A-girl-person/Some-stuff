"use client";
import Link from "next/link";
import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_COUNTRY_DETAIL = gql`
  query countries($code: ID!) {
    country(code: $code) {
      name
      code
      capital
      continent {
        name
      }
      currency
      emoji
      languages {
        name
      }
    }
  }
`;

const CountryDetail = ({ params: { code } }) => {
  const { loading, error, data } = useQuery(GET_COUNTRY_DETAIL, {
    variables: {
      code: code,
    },
  });
  if (loading) return "Loading...";
  if (error) return "Error";

  console.log(code);
  return (
    <div>
      <p>continent: {data?.country.continent.name}</p>
      <p>
        name: {data?.country.name} {data?.country.emoji}
      </p>
      <p>Capital city: {data?.country.capital}</p>
      <p>Language: {data?.country.languages.name}</p>
      <p>Currency: {data?.country.currency}</p>
      <p></p>
    </div>
  );
};

export default CountryDetail;
