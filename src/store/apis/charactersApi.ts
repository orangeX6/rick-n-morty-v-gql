import { createApi } from '@reduxjs/toolkit/query/react';
import { gql } from 'graphql-request';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';
import { Characters } from '../../types';

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
        if (
          currentCache.characters.info.count !== newItems.characters.info.count
        ) {
          return newItems;
        }
        if (newItems.characters.info.pages === 1) {
          return newItems;
        }

        currentCache.characters.info = newItems.characters.info;
        currentCache.characters.results.push(...newItems.characters.results);
        return currentCache;
      },
      /* eslint-disable */
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
