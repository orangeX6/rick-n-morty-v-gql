import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState, ChangeEvent } from 'react';
import { Box, Stack, TextField, Paper, MenuItem, Button } from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import {
  RootState,
  changeName,
  changeGender,
  changeSpecies,
  reset,
  changeStatus,
  useLazyFetchCharactersQuery,
} from '../store';
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

  const dispatch = useDispatch();

  const [term, setTerm] = useState<string>('');

  useEffect(() => {
    // if (!term) return;
    console.log(name, species, status, gender);
    const timerId = setTimeout(() => {
      dispatch(changeName(term));
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  const { name, species, status, gender } = useSelector((state: RootState) => {
    return {
      name: state.filter.name,
      species: state.filter.species,
      status: state.filter.status,
      gender: state.filter.gender,
    };
  });

  const handleSpecies = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(name, species, status, gender);
    dispatch(changeSpecies(e.target.value));
  };

  const handleGender = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeGender(e.target.value));
  };

  const handleStatus = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeStatus(e.target.value));
  };

  const handleReset = () => {
    dispatch(changeSpecies(''));
    dispatch(changeGender(''));
    dispatch(changeStatus(''));
    setTerm('');
    dispatch(changeName(''));
    dispatch(reset);
  };

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
          // defaultValue={name}
          sx={{ flexGrow: 1, maxHeight: 100 }}
          value={term}
          type="text"
          onChange={(e) => setTerm(e.target.value)}
        />
        <TextField
          defaultValue=""
          label="species"
          size="small"
          color="success"
          sx={{ width: '20%' }}
          value={species}
          onChange={handleSpecies}
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
          value={status}
          onChange={handleStatus}
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
          value={gender}
          onChange={handleGender}
          select
        >
          {Gender.map((sex) => (
            <MenuItem key={sex} value={sex}>
              {sex}
            </MenuItem>
          ))}
        </TextField>
        <Button
          variant="contained"
          size="small"
          startIcon={<RestartAltIcon />}
          onClick={handleReset}
        >
          Reset
        </Button>
      </Stack>
      {/* </Stack> */}
      {/* </Box> */}
    </Paper>
  );
};
