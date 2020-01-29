
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import fetch from "isomorphic-fetch";
import Main from "../templates/main";

const client = new ApolloClient({
  fetch,
  uri: "http://localhost:4000/graphql",
});

export default () => (
  <ApolloProvider client={client}>
    <Main />
  </ApolloProvider>
);
