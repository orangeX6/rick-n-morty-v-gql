import { Box, Stack } from '@mui/material';
import { Filter } from './Filter';
import { CharacterContainer } from './CharacterContainer';
import { Navbar } from './Navbar';

export const Layout = () => {
  return (
    <Box
      sx={{
        minWidth: '90vw',
        minHeight: '100vh',
        ml: 1,
        mr: 1,
        boxShadow: 4,
      }}
    >
      <Navbar />
      <Stack padding="1rem" spacing={2}>
        <Filter />
        <CharacterContainer />
      </Stack>
    </Box>
  );
};
