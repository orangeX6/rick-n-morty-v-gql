import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useLazyFetchCharactersQuery } from '../store';
import { FilterCharacter } from '../types';

export const useLazyFetchCharacters = () => {
  const [page, setPage] = useState(1);

  const { filter } = useSelector((state: RootState) => {
    return {
      filter: state.filter,
    };
  });

  const [getCharacters, { data, error, isFetching }] =
    useLazyFetchCharactersQuery();

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

  useEffect(() => {
    setPage((prev) => 1);
    getCharacters({ page, filter });
  }, [filter, page]);

  return { data, error, isFetching };
};
