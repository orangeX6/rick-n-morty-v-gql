import {
  configureStore,
  combineReducers,
  // eslint-disable-next-line import/named
  PreloadedState,
} from '@reduxjs/toolkit';
import { charactersApi } from './apis/charactersApi';
import { characterDetailsApi } from './apis/characterDetailsApi';
import { setupListeners } from '@reduxjs/toolkit/query';
import { theme } from './slices/themeSlice';
import { filterReducer } from './slices/filterSlice';

const rootReducer = combineReducers({
  filter: filterReducer,
  theme,
  [charactersApi.reducerPath]: charactersApi.reducer,
  [characterDetailsApi.reducerPath]: characterDetailsApi.reducer,
});

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

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware()
        .concat(charactersApi.middleware)
        .concat(characterDetailsApi.middleware);
    },
    preloadedState,
  });
}

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type RootReducer = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export { toggleTheme, theme } from './slices/themeSlice';

export {
  changeName,
  changeSpecies,
  changeStatus,
  changeGender,
  reset,
  filterReducer,
} from './slices/filterSlice';

export {
  useFetchCharactersQuery,
  useLazyFetchCharactersQuery,
} from './apis/charactersApi';

export {
  useLazyFetchCharacterDetailsQuery,
  useFetchCharacterDetailsQuery,
} from './apis/characterDetailsApi';
