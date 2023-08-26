import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectMoviesData,
  selectMoviesError,
  selectMoviesIsFetching,
} from 'redux/slices/films/filmsSlice';
import { getTrendings } from 'redux/slices/films/filmsOperations';

import MovieList from 'components/MovieList/MovieList';

const HomePage = () => {
  // const { data, isFetching, getData } = useData();
  const dispatcher = useDispatch();
  const trendingFilms = useSelector(selectMoviesData);
  const isFetching = useSelector(selectMoviesIsFetching);
  const error = useSelector(selectMoviesError);

  useEffect(() => {
    dispatcher(getTrendings());
  }, [dispatcher]);

  return (
    <div className="container">
      <h2 className="home_header">Trend movies</h2>
      <MovieList movies={trendingFilms} isFetching={isFetching} error={error} />
    </div>
  );
};

export default HomePage;
