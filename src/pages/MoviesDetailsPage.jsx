import Loader from 'components/Loader/Loader';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import { getSingleMovie } from 'js/API_requests/getSingleMovie';
import { useData } from 'js/useData/useData';
import { Suspense, useEffect } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import ErrorPage from './ErrorPage';

const MoviesDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();

  const { data: moviesList, isFetching, error, getData } = useData();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    if (!movieId) return;
    getData(getSingleMovie(movieId));
  }, [getData, movieId]);

  if (error?.message) {
    return <ErrorPage />;
  }

  return (
    <section>
      {isFetching && <Loader />}
      {moviesList && (
        <MovieDetails data={moviesList} backLinkHref={backLinkHref} />
      )}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </section>
  );
};

export default MoviesDetailsPage;
