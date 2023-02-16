import { Box, Stack, TextField, Paper, MenuItem, Button } from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { useEffect, ChangeEvent } from 'react';
import { useLazyFetchCharactersQuery } from '../store';

const species = [
  'Alien',
  'Animal',
  'Human',
  'Humanoid',
  'Mytholog',
  'PoopyButthole',
  'Robot',
  'Vampire',
  'Unknown',
];

const status = ['Alive', 'Dead', 'Unknown'];

const gender = ['Male', 'Female', 'Genderless', 'Unknown'];

export const Filter = () => {
  const [fetchCharacters, { data, isLoading, error }] =
    useLazyFetchCharactersQuery();

  // useEffect(() => {
  //   console.log('LOADED');
  // }, []);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    fetchCharacters({ page: 1, filter: { species: e.target.value } });
  };

  if (data) console.log(data);

  return (
    <Paper
      sx={{
        padding: '1rem',
        backgroundColor: 'primary.light',
        maxHeight: '15vh',
      }}
    >
      {/* <Box
        sx={{
          backgroundColor: 'primary.light',
          height: '12vh',
          padding: '1rem',
        }}
      > */}
      {/* <Stack spacing={4}> */}
      <Stack direction="row" sx={{ padding: '1rem' }} spacing={2}>
        <TextField
          label="Name"
          variant="outlined"
          color="success"
          size="small"
          sx={{ flexGrow: 1, maxHeight: 100 }}
        />
        <TextField
          defaultValue=""
          label="species"
          size="small"
          color="success"
          sx={{ width: '20%' }}
          select
          onChange={handleChange}
        >
          {species.map((specie) => (
            <MenuItem key={specie} value={specie}>
              {specie}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          defaultValue=""
          label="status"
          size="small"
          color="success"
          sx={{ width: '20%' }}
          select
        >
          {status.map((statusVal) => (
            <MenuItem key={statusVal} value={statusVal}>
              {statusVal}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          defaultValue=""
          label="gender"
          size="small"
          color="success"
          sx={{ width: '20%' }}
          select
        >
          {gender.map((sex) => (
            <MenuItem key={sex} value={sex}>
              {sex}
            </MenuItem>
          ))}
        </TextField>
        <Button variant="contained" size="small" startIcon={<RestartAltIcon />}>
          Reset
        </Button>
      </Stack>
      {/* </Stack> */}
      {/* </Box> */}
    </Paper>
  );
};
