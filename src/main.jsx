import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const cache = new InMemoryCache();
const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  cache: cache,
  connectToDevTools: true,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  //<React.StrictMode>
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  //</React.StrictMode>
);
