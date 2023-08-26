import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

import MovieList from 'components/MovieList/MovieList';

import { searchParamKey } from 'js/consts';
import ErrorPage from './ErrorPage';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectMoviesData,
  selectMoviesError,
  selectMoviesIsFetching,
} from 'redux/slices/films/filmsSlice';
import { getSearchMovies } from 'redux/slices/films/filmsOperations';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get(searchParamKey);
  // const { data, isFetching, error, getData } = useData();
  const dispatcher = useDispatch();
  const searchedMovies = useSelector(selectMoviesData);
  const isFetching = useSelector(selectMoviesIsFetching);
  const error = useSelector(selectMoviesError);

  useEffect(() => {
    dispatcher(getSearchMovies(search));
  }, [dispatcher, search]);

  const onSearch = e => {
    e.preventDefault();
    const searchValue = e.currentTarget.elements.search.value.trim();
    if (!searchValue) return;
    setSearchParams({ [searchParamKey]: searchValue });
  };

  if (error?.message) {
    return <ErrorPage />;
  }

  return (
    <>
      <div className="container">
        <form onSubmit={onSearch}>
          <input name="search" type="text" defaultValue={search || ''} />
          <button type="submit">Search</button>
        </form>
        <MovieList movies={searchedMovies} isFetching={isFetching} />
      </div>
    </>
  );
};

export default MoviesPage;
