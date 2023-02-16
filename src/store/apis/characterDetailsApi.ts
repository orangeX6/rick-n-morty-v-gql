import { createApi } from '@reduxjs/toolkit/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';
import { gql } from 'graphql-request';
import { CharacterDetail } from '../../types/character-detail';

const characterDetailsApi = createApi({
  reducerPath: 'characterDetails',
  baseQuery: graphqlRequestBaseQuery({
    url: 'https://rickandmortyapi.com/graphql',
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
