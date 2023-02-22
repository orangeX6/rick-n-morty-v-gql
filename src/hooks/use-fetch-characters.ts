import { useEffect, useState } from 'react';
import { useAppSelector } from '../hooks';
import { RootState, useLazyFetchCharactersQuery } from '../store';

export const useLazyFetchCharacters = () => {
  const [page, setPage] = useState(1);

  const { filter } = useAppSelector((state: RootState) => {
    return {
      filter: state.filter,
    };
  });

  const [getCharacters, { data, error, isFetching }] =
    useLazyFetchCharactersQuery();

  useEffect(() => {
    const onScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY + 400 >=
        document.body.offsetHeight - 400;

      if (scrolledToBottom && !isFetching && data?.characters.info.next) {
        setPage(data.characters.info.next);
      }
    };
    document.addEventListener('scroll', onScroll);

    return function () {
      document.removeEventListener('scroll', onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, isFetching]);

  useEffect(() => {
    setPage((prev) => 1);
    getCharacters({ page, filter });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, page]);

  return { data, error, isFetching };
};
