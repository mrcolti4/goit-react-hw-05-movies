import { createAsyncThunk } from '@reduxjs/toolkit';
import { getMovieDetail } from 'js/API_requests/getMovieDetail';

export const getMovieCast = createAsyncThunk(
  'castDetails/getMovieCast',
  async (data, thunkApi) => {
    try {
      const cast = getMovieDetail(data);
      return cast;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getMovieReviews = createAsyncThunk(
  'castDetails/getMovieReviews',
  async (data, thunkApi) => {
    try {
      const cast = getMovieDetail(data);
      return cast;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);
