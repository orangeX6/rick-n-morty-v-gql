import { configureStore } from '@reduxjs/toolkit';
import theme from './slices/themeSlice';
import { charactersApi } from './apis/charactersApi';
import { characterDetailsApi } from './apis/characterDetailsApi';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    theme,
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
  useFetchCharactersQuery,
  useLazyFetchCharactersQuery,
} from './apis/charactersApi';
export {
  useLazyFetchCharacterDetailsQuery,
  useFetchCharacterDetailsQuery,
} from './apis/characterDetailsApi';
