"use client";

import Continents from "@/components/Continents";
import "./globals.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Children } from "react";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/graphql",
  cache: new InMemoryCache(),
});

const app = ({ children }) => (
  <html lang="en">
    <body>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </body>
  </html>
);

export default app;
