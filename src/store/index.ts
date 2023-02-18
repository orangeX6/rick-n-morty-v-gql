import { configureStore } from '@reduxjs/toolkit';
import { charactersApi } from './apis/charactersApi';
import { characterDetailsApi } from './apis/characterDetailsApi';
import { setupListeners } from '@reduxjs/toolkit/query';
import { theme } from './slices/themeSlice';
import { filterReducer } from './slices/filterSlice';

export const store = configureStore({
  reducer: {
    theme,
    filter: filterReducer,
    [charactersApi.reducerPath]: charactersApi.reducer,
    [characterDetailsApi.reducerPath]: characterDetailsApi.reducer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(charactersApi.middleware)
      .concat(characterDetailsApi.middleware);
  },
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export {
  changeName,
  changeSpecies,
  changeStatus,
  changeGender,
  reset,
} from './slices/filterSlice';

export {
  useFetchCharactersQuery,
  useLazyFetchCharactersQuery,
} from './apis/charactersApi';

export {
  useLazyFetchCharacterDetailsQuery,
  useFetchCharacterDetailsQuery,
} from './apis/characterDetailsApi';
