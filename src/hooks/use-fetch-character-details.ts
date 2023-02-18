import { useEffect, useState } from 'react';
import { CharacterDetail } from '../types';
import {
  useLazyFetchCharacterDetailsQuery,
  useFetchCharacterDetailsQuery,
} from '../store';

export const useFetchCharacterDetails = (id: number, skip: boolean) => {
  // const [skip, setSkip] = useState(true);
  const { data, error, isFetching } = useFetchCharacterDetailsQuery(
    { id },
    { skip }
  );

  // useEffect(() => {
  //   setSkip((prev) => !prev);
  // }, []);

  let character: CharacterDetail | undefined;
  if (data) {
    character = data.character;
  }

  return { character, error, isFetching };
};
