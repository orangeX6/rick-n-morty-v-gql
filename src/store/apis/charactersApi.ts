import { createApi } from '@reduxjs/toolkit/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';
import { gql } from 'graphql-request';
import { Characters } from '../../types';
import { FilterCharacter } from '../../types';

interface Info {
  count: number;
  pages: number;
  next: number;
  prev: number;
}

interface CharacterList {
  characters: {
    info: Info;
    results: Characters[];
  };
}

interface IArgs {
  page: number;
  filter: FilterCharacter;
}

const charactersApi = createApi({
  reducerPath: 'characters',
  baseQuery: graphqlRequestBaseQuery({
    url: 'https://rickandmortyapi.com/graphql',
  }),
  endpoints: (builder) => ({
    fetchCharacters: builder.query({
      query: ({ page, filter }) => ({
        document: gql`
          query fetchCharacters($page: Int!, $filter: FilterCharacter) {
            characters(page: $page, filter: $filter) {
              info {
                count
                pages
                next
                prev
              }
              results {
                id
                name
                status
                species
                type
                gender
                image
                created
              }
            }
          }
        `,
        variables: {
          page,
          filter,
        },
      }),
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache: CharacterList, newItems: CharacterList) => {
        currentCache.characters.info = newItems.characters.info;
        currentCache.characters.results.push(...newItems.characters.results);
      },
      // @ts-ignore
      forceRefetch({ currentArg, previousArg }) {
        if (previousArg) return currentArg.page !== previousArg.page;
      },
    }),
  }),
});

export { charactersApi };
export const { useFetchCharactersQuery, useLazyFetchCharactersQuery } =
  charactersApi;
