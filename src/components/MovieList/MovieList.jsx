import Loader from 'components/Loader/Loader';
import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ movies = [], isFetching = false, error = '' }) => {
  const location = useLocation();
  const showLoader = isFetching;
  const showMovies = movies?.length > 0;

  return (
    <ul className="movie_list">
      {showLoader && <Loader />}
      {showMovies &&
        !showLoader &&
        movies.map(({ title, id, name }) => {
          return (
            <li className="movie_item" key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title ?? name}
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

export default MovieList;
