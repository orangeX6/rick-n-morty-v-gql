import { createSlice } from '@reduxjs/toolkit';
import { FilterCharacter } from '../../types';

const initialState: FilterCharacter = {
  name: '',
  gender: '',
  species: '',
  status: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
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
    reset(state, action) {
      state.name = '';
      state.gender = '';
      state.species = '';
      state.status = '';
    },
  },
});

export const { changeName, changeSpecies, changeStatus, changeGender, reset } =
  filterSlice.actions;
export const filterReducer = filterSlice.reducer;
