import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import React, { ReactNode } from 'react';

const httpLink = createHttpLink({
  uri: 'https://your-graphql-endpoint.com/graphql', 
});

const authLink = setContext((_, { headers }) => {
  const token = 'your-auth-token'; 
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

interface ApolloWrapperProps {
  children: ReactNode;
}

const ApolloWrapper: React.FC<ApolloWrapperProps> = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloWrapper;
