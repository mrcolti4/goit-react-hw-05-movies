import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes, useLocation, useParams } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Loader from 'components/Loader/Loader';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import ErrorPage from './ErrorPage';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieData } from 'redux/slices/films/filmsOperations';
import {
  selectMoviesError,
  selectMoviesIsFetching,
  selectMoviesMovieDetails,
} from 'redux/slices/films/filmsSlice';

const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

const LocationProvider = ({ children }) => {
  return <AnimatePresence>{children}</AnimatePresence>;
};

const RoutesWithAnimation = () => {
  const location = useLocation();

  return (
    <Suspense fallback={<Loader />}>
      <Routes key={location.key}>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Routes>
    </Suspense>
  );
};

const MoviesDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();

  // const { data: moviesList, isFetching, error, getData } = useData();
  const dispatcher = useDispatch();
  const movieData = useSelector(selectMoviesMovieDetails);
  const isFetching = useSelector(selectMoviesIsFetching);
  const error = useSelector(selectMoviesError);

  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    if (!movieId) return;
    dispatcher(getMovieData(movieId));
  }, [dispatcher, movieId]);

  if (error?.message) {
    return <ErrorPage />;
  }

  return (
    <section>
      <div className="container">
        {isFetching && <Loader />}
        {movieData && (
          <MovieDetails data={movieData} backLinkHref={backLinkHref} />
        )}
        <LocationProvider>
          <RoutesWithAnimation />
        </LocationProvider>
      </div>
    </section>
  );
};

export default MoviesDetailsPage;
