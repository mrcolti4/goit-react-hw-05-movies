import { Link, useLocation, useSearchParams } from 'react-router-dom';

import { getMoviesByQuery } from 'js/API_requests/getMoviesByQuery';
import { searchParamKey } from 'js/consts';
import { useData } from 'js/useData/useData';
import { useEffect } from 'react';

const MoviesPage = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get(searchParamKey);
  const { data, isFetching, error, getData } = useData();

  const moviesList = data;

  useEffect(() => {
    getData(getMoviesByQuery(search));
  }, [getData, search]);

  const onSearch = e => {
    e.preventDefault();
    const searchValue = e.target[0].value;
    if (!searchValue) return;
    setSearchParams({ [searchParamKey]: searchValue });
  };

  return (
    <>
      <form onSubmit={onSearch}>
        <input type="text" defaultValue={search || ''} />
        <button type="submit">Search</button>
      </form>
      <ul>
        {moviesList.map(({ title, name, id }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title ?? name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MoviesPage;
