import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import { useState } from 'react';
import { CharacterDetails } from './CharacterDetail';
import { FC } from 'react';
import { Characters } from '../types';
// import {
//   useLazyFetchCharacterDetailsQuery,
//   useFetchCharacterDetailsQuery,
// } from '../store';

interface CharacterProps {
  character: Characters;
}

export const CharacterCard: FC<CharacterProps> = ({ character }) => {
  const [showCharDetails, setShowCharDetails] = useState(false);
  // const [fetchCharacterDetails, { data, isLoading, error }] =
  //   useLazyFetchCharacterDetailsQuery();

  // const { data, isLoading, error } = useFetchCharacterDetailsQuery(id);

  const handleClick = () => {
    setShowCharDetails(!showCharDetails);
    // const id = character.id;
    // fetchCharacterDetails({ id });
  };

  // if (data) {
  //   console.log(data);
  // }

  return (
    <Box>
      {/* <Card
        sx={{
          backgroundColor: 'primary',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          ':hover': {
            boxShadow: 7,
            cursor: 'pointer',
          },
        }}
        onClick={handleClick}
      > */}
      <CardContent onClick={handleClick}>
        <Box>
          {
            <img
              style={{ width: '100%', height: '100%' }}
              src={character.image}
              alt={character.name}
            />
          }
        </Box>
        <Typography gutterBottom variant="h5" component="div">
          {character.name}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Species - {character.species}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Status - {character.status}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Gender - {character.gender}
        </Typography>
      </CardContent>
      {/* </Card> */}
      <CharacterDetails
        dialog={showCharDetails}
        handleCloseDialog={() => setShowCharDetails(false)}
        id={character.id}
      />
    </Box>
  );
};
