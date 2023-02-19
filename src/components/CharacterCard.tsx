import { FC, useState } from 'react';
import { Box, CardContent, Typography } from '@mui/material';
import { CharacterDetails } from './CharacterDetail';
import { Characters } from '../types';

interface CharacterProps {
  character: Characters;
}

export const CharacterCard: FC<CharacterProps> = ({ character }) => {
  const [showCharDetails, setShowCharDetails] = useState(false);

  const handleClick = () => {
    setShowCharDetails(!showCharDetails);
  };

  return (
    <Box>
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
