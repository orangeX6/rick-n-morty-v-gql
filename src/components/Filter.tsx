import { useEffect, useState, ChangeEvent } from 'react';
import { useAppSelector, useAppDispatch } from '../hooks';

import { TextField, Paper, MenuItem, Button, Grid } from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import {
  RootState,
  changeName,
  changeGender,
  changeSpecies,
  reset,
  changeStatus,
} from '../store';
import { Species, Gender, Status } from '../types';

export const Filter = () => {
  const dispatch = useAppDispatch();

  const [term, setTerm] = useState<string>('');

  useEffect(() => {
    // if (!term) return;
    const timerId = setTimeout(() => {
      dispatch(changeName(term));
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [term]);

  const { name, species, status, gender } = useAppSelector(
    (state: RootState) => {
      return {
        name: state.filter.name,
        species: state.filter.species,
        status: state.filter.status,
        gender: state.filter.gender,
      };
    }
  );

  const handleSpecies = (e: ChangeEvent<HTMLInputElement>) => {
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
        boxShadow: 3,
      }}
    >
      <Grid
        container
        alignContent="center"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item margin={1} xs={12} sm={5} md={5.5} lg={2.2} xl={2.2}>
          <TextField
            defaultValue={name}
            label="Name"
            variant="outlined"
            color="success"
            size="small"
            sx={{ width: '100%' }}
            value={term}
            type="text"
            onChange={(e) => setTerm(e.target.value)}
          />
        </Grid>

        <Grid item margin={1} xs={12} sm={5} md={5.5} lg={2.2} xl={2.2}>
          <TextField
            defaultValue=""
            label="species"
            size="small"
            color="success"
            sx={{ width: '100%' }}
            value={species}
            onChange={handleSpecies}
            select
          >
            {Species.map((specie) => (
              <MenuItem key={specie} value={specie}>
                {specie}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item margin={1} xs={12} sm={5} md={5.5} lg={2.2} xl={2.2}>
          <TextField
            defaultValue=""
            label="status"
            size="small"
            color="success"
            sx={{ width: '100%' }}
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
        </Grid>

        <Grid item margin={1} xs={12} sm={5} md={5.5} lg={2.2} xl={2.2}>
          <TextField
            defaultValue=""
            label="gender"
            size="small"
            color="success"
            sx={{ width: '100%' }}
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
        </Grid>

        <Grid item margin={1}>
          <Button
            variant="contained"
            size="small"
            startIcon={<RestartAltIcon />}
            onClick={handleReset}
          >
            Reset
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};
