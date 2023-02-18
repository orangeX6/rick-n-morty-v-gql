import { useEffect, useState } from 'react';
import { useFetchCharactersQuery } from '../store';
import { FilterCharacter } from '../types';

export const useFetchCharacters = (filterVal: FilterCharacter = {}) => {
  const [page, setPage] = useState(1);
  const { data, error, isFetching } = useFetchCharactersQuery({
    page,
    filter: filterVal,
  });

  useEffect(() => {
    const onScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY + 250 >=
        document.body.offsetHeight - 250;

      if (scrolledToBottom && !isFetching && data?.characters.info.next) {
        setPage(data.characters.info.next);
      }
    };
    document.addEventListener('scroll', onScroll);

    return function () {
      document.removeEventListener('scroll', onScroll);
    };
  }, [page, isFetching]);

  return { data, error, isFetching };
};
