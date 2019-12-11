import { GRAPHQL_HTTP_LINK_URL } from 'constants/env';
import ApolloClient from 'apollo-boost';

export const apolloClient = new ApolloClient({
  uri: GRAPHQL_HTTP_LINK_URL,
});
