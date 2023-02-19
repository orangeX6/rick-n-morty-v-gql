import { CharacterDetail } from '../types';
import { useFetchCharacterDetailsQuery } from '../store';

export const useFetchCharacterDetails = (id: number, skip: boolean) => {
  const { data, error, isFetching } = useFetchCharacterDetailsQuery(
    { id },
    { skip }
  );

  let character: CharacterDetail | undefined;
  if (data) {
    character = data.character;
  }

  return { character, error, isFetching };
};
