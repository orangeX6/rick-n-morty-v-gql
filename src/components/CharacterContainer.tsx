import { Box, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { useFetchCharactersQuery } from '../store';
import { CharacterCard } from './CharacterCard';
import { Characters } from '../types/characters';
import { Progress } from './Progress';

export const CharacterContainer = () => {
  const [page, setPage] = useState(1);
  const { data, error, isFetching } = useFetchCharactersQuery({ page });

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

  let content;
  if (data) {
    content = data.characters.results.map((character: Characters) => (
      <Grid item xs={12} sm={6} md={4} lg={12 / 5} key={character.id}>
        <CharacterCard character={character} />
      </Grid>
    ));
  }

  // let content;
  // if (isFetching) {
  //   content = <Skeleton className="h-10 w-full" times={3} />;
  // } else if (error) {
  //   content = <div>Error Loading Albums</div>;
  // } else {
  //   content = data.map((album) => (
  //     <AlbumsListItem key={album.id} album={album} />
  //   ));
  // }

  return (
    <>
      <Grid
        container
        sx={{ minHeight: '20vh', paddingX: 6 }}
        rowSpacing={3}
        columnSpacing={1}
      >
        {/* <Grid item xs={12} sm={6} md={4} lg={12 / 5}>
      <CharacterCard />
    </Grid>
    <Grid item xs={12} sm={6} md={4} lg={12 / 5}>
      <CharacterCard />
    </Grid>
    <Grid item xs={12} sm={6} md={4} lg={12 / 5}>
      <CharacterCard />
    </Grid>
   */}
        {content}
      </Grid>
      {isFetching && <Progress />}
      {error && <p>Something Went Wrong</p>}
    </>
  );
};
