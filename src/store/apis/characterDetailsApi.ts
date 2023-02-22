import { createApi } from '@reduxjs/toolkit/query/react';
import { gql } from 'graphql-request';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';

export const serviceURL = 'https://rickandmortyapi.com/graphql';

const characterDetailsApi = createApi({
  reducerPath: 'characterDetails',
  baseQuery: graphqlRequestBaseQuery({
    url: serviceURL,
  }),
  endpoints: (builder) => ({
    FetchCharacterDetails: builder.query({
      query: ({ id }) => ({
        document: gql`
          query FetchCharacterDetails($id: ID!) {
            character(id: $id) {
              id
              name
              status
              species
              type
              gender
              image
              created
              origin {
                name
                type
                dimension
              }
              location {
                name
                type
                dimension
              }
              episode {
                name
                episode
                air_date
                # created
              }
            }
          }
        `,
        variables: {
          id,
        },
      }),
    }),
  }),
});

export { characterDetailsApi };
export const {
  useFetchCharacterDetailsQuery,
  useLazyFetchCharacterDetailsQuery,
} = characterDetailsApi;
