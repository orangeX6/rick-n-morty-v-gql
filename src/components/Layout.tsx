import { Box, Stack, makeStyles, Paper, Typography } from '@mui/material';
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
        // backgroundColor: '#f0f0f0',
      }}
    >
      {/* <Paper
        style={{
          minHeight: '100vh',
          minWidth: '100vw',
          borderRadius: '0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      > */}
      <Navbar />
      <Stack padding="1rem" spacing={2}>
        <Filter />
        <CharacterContainer />
      </Stack>
    </Box>
  );
};
