import { createSlice } from '@reduxjs/toolkit';
import { getMovieData, getSearchMovies, getTrendings } from './filmsOperations';

export const selectMoviesData = state => state.films.movies;
export const selectMoviesMovieDetails = state => state.films.movieDetails;
export const selectMoviesIsFetching = state => state.films.isFetching;
export const selectMoviesError = state => state.films.error;

const initialState = {
  movies: null,
  movieDetails: null,
  isFetching: false,
  error: null,
};

const filmsSlice = createSlice({
  name: 'films',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getTrendings.pending, state => {
        state.isFetching = true;
        state.error = null;
      })
      .addCase(getTrendings.fulfilled, (state, { payload }) => {
        state.isFetching = false;
        state.movies = payload;
      })
      .addCase(getTrendings.rejected, (state, { payload }) => {
        state.isFetching = false;
        state.error = payload;
      })
      .addCase(getSearchMovies.pending, state => {
        state.isFetching = true;
        state.error = null;
      })
      .addCase(getSearchMovies.fulfilled, (state, { payload }) => {
        state.isFetching = false;
        state.movies = payload;
      })
      .addCase(getSearchMovies.rejected, (state, { payload }) => {
        state.isFetching = false;
        state.error = payload;
      })
      .addCase(getMovieData.pending, state => {
        state.isFetching = true;
        state.error = null;
      })
      .addCase(getMovieData.fulfilled, (state, { payload }) => {
        state.isFetching = false;
        state.movieDetails = payload;
      })
      .addCase(getMovieData.rejected, (state, { payload }) => {
        state.isFetching = false;
        state.error = payload;
      });
  },
});

export const filmsReducer = filmsSlice.reducer;
