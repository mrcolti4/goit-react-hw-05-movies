import { getTrendMovies } from 'js/API_requests/getTrendMovies';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getMoviesByQuery } from 'js/API_requests/getMoviesByQuery';
import { getSingleMovie } from 'js/API_requests/getSingleMovie';

export const getTrendings = createAsyncThunk(
  'trendings/getTrendings',
  async (_, thunkApi) => {
    try {
      const data = await getTrendMovies();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getSearchMovies = createAsyncThunk(
  'searchMovies/getSearhMovies',
  async (data, thunkApi) => {
    try {
      const movies = await getMoviesByQuery(data);
      return movies;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getMovieData = createAsyncThunk(
  'movieDetails/getSingleMovie',
  async (data, thunkApi) => {
    try {
      const movie = getSingleMovie(data);
      return movie;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
