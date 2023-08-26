import { configureStore } from '@reduxjs/toolkit';
import { filmsReducer } from './slices/films/filmsSlice';
import { movieExtrasReducer } from './slices/movieExtras/movieExtrasSlice';

export const store = configureStore({
  reducer: {
    films: filmsReducer,
    movieExtras: movieExtrasReducer,
  },
});
