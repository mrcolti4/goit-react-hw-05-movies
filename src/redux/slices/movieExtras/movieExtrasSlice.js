import { createSlice } from '@reduxjs/toolkit';
import { getMovieCast, getMovieReviews } from './movieExtrasOperations';

export const selectMovieExtraCast = state => state.movieExtras.cast;
export const selectMovieExtraReviews = state => state.movieExtras.reviews;
export const selectMovieExtraIsFetching = state => state.movieExtras.isFetching;
export const selectMovieExtraError = state => state.movieExtras.error;

const initialState = {
  cast: null,
  reviews: null,
  isFetching: false,
  error: null,
};

const movieExtras = createSlice({
  name: 'movieExtras',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getMovieCast.pending, state => {
        state.isFetching = true;
        state.error = null;
      })
      .addCase(getMovieCast.fulfilled, (state, { payload }) => {
        state.isFetching = false;
        state.cast = payload;
      })
      .addCase(getMovieCast.rejected, (state, { payload }) => {
        state.isFetching = false;
        state.error = payload;
      })
      .addCase(getMovieReviews.pending, state => {
        state.isFetching = true;
        state.error = null;
      })
      .addCase(getMovieReviews.fulfilled, (state, { payload }) => {
        state.isFetching = false;
        state.reviews = payload;
      })
      .addCase(getMovieReviews.rejected, (state, { payload }) => {
        state.isFetching = false;
        state.error = payload;
      });
  },
});

export const movieExtrasReducer = movieExtras.reducer;
