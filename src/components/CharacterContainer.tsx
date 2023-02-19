import { Grid, Card } from '@mui/material';
import { Characters } from '../types';
import { CharacterCard } from './CharacterCard';
import { Progress } from './Progress';
import { useLazyFetchCharacters } from '../hooks';

export const CharacterContainer = () => {
  let { data, error, isFetching } = useLazyFetchCharacters();

  let content;
  if (data) {
    if (!data.characters.info.count) {
      content = (
        <Grid
          item
          component={Card}
          xs={12}
          sm={6}
          md={6}
          lg={6}
          xl={6}
          padding={5}
          alignItems="center"
          justifyContent="center"
          sx={{
            backgroundColor: 'primary',
            borderRadius: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            ':hover': {
              boxShadow: 7,
              cursor: 'pointer',
            },
          }}
        >
          NO RESULTS FOUND!
        </Grid>
      );
    } else {
      content = data.characters.results.map((character: Characters) => (
        <Grid
          item
          component={Card}
          xs={12}
          sm={5}
          md={3.5}
          lg={2.4}
          xl={2}
          marginX={1.5}
          marginY={2.5}
          key={character.id}
          sx={{
            backgroundColor: 'primary',
            borderRadius: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            ':hover': {
              boxShadow: 7,
              cursor: 'pointer',
            },
          }}
        >
          <CharacterCard character={character} />
        </Grid>
      ));
    }
  }

  return (
    <>
      <Grid
        container
        sx={{ minHeight: '20vh' }}
        alignContent="center"
        justifyContent="center"
      >
        {content}
      </Grid>
      {isFetching && <Progress />}
      {error && <p>Something Went Wrong</p>}
    </>
  );
};
