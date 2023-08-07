import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Loader from 'components/Loader/Loader';

const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

const MovieDetails = ({ data, isFetching }) => {
  const { title, poster_path, vote_average, overview, genres } = data;
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';
  return (
    <>
      {isFetching && <Loader />}
      <Link to={backLinkHref}>Go back</Link>
      {!!data && (
        <div className="movie_item">
          <img
            src={
              poster_path && `https://image.tmdb.org/t/p/w500/${poster_path}`
            }
            alt={title && title}
            className="movie_poster"
          />
          <h2 className="movie_title">{title}</h2>
          <p className="movie_score">{String(Math.round(vote_average * 10))}</p>
          <div className="movie_overview">
            <h3>Overview</h3>
            <p>{overview}</p>
          </div>
          <div className="movie_genres">
            <h3>Genres</h3>
            <p>{genres?.map(({ name }) => `${name} `)}</p>
          </div>
        </div>
      )}
      <ul>
        <li>
          <Link to="cast" state={{ from: backLinkHref }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: backLinkHref }}>
            Reviews
          </Link>
        </li>
      </ul>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default MovieDetails;
