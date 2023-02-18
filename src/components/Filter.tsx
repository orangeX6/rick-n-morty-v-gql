import { useDispatch, useSelector } from 'react-redux';
import { useEffect, ChangeEvent } from 'react';
import { Box, Stack, TextField, Paper, MenuItem, Button } from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { RootState, useLazyFetchCharactersQuery } from '../store';
import { Species, Gender, Status } from '../types';

export const Filter = () => {
  // const [fetchCharacters, { data, isLoading, error }] =
  // useLazyFetchCharactersQuery();
  // useEffect(() => {
  //   console.log('LOADED');
  // }, []);
  // const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
  //   e.preventDefault();
  //   fetchCharacters({ page: 1, filter: { species: e.target.value } });
  // };
  // if (data) console.log(data);

  const { name, species, status, gender } = useSelector((state: RootState) => {
    return {
      name: state.filter.name,
      species: state.filter.species,
      status: state.filter.status,
      gender: state.filter.gender,
    };
  });

  const handleSpecies = () => {};
  const handleGender = () => {};
  const handleStatus = () => {};

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
          defaultValue={name}
          sx={{ flexGrow: 1, maxHeight: 100 }}
        />
        <TextField
          defaultValue=""
          label="species"
          size="small"
          color="success"
          sx={{ width: '20%' }}
          select
          // onChange={handleChange}
        >
          {Species.map((specie) => (
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
          {Status.map((statusVal) => (
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
          {Gender.map((sex) => (
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
