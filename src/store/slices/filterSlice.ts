import { createSlice } from '@reduxjs/toolkit';
import { useFetchCharactersQuery } from '../apis/charactersApi';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    name: '',
    species: '',
    status: '',
    gender: '',
  },
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeSpecies(state, action) {
      state.species = action.payload;
    },
    changeStatus(state, action) {
      state.status = action.payload;
    },
    changeGender(state, action) {
      state.gender = action.payload;
    },
  },
});

export const { changeName, changeSpecies, changeStatus, changeGender } =
  filterSlice.actions;
export const filterReducer = filterSlice.reducer;
