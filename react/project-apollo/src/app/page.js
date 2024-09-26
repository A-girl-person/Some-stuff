"use client";

import React from "react";
import { useQuery, gql } from "@apollo/client";
import Continents from "@/components/Continents";

export default function Home() {
  return (
    <div>
      <p>
        <Continents />
      </p>
    </div>
  );
}
