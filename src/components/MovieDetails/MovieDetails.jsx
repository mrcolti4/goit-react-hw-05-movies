import { Link } from 'react-router-dom';

const MovieDetails = ({ data, backLinkHref }) => {
  const { title, poster_path, vote_average, overview, genres } = data;
  const votes = String(Math.round(vote_average * 10));
  return (
    <>
      <Link to={backLinkHref}>Go back</Link>
      {Boolean(data) && (
        <div className="movie_item">
          <img
            width={'100px'}
            src={
              poster_path && `https://image.tmdb.org/t/p/w500/${poster_path}`
            }
            alt={title && title}
            className="movie_poster"
          />
          <h2 className="movie_title">{title}</h2>
          <p className="movie_score">{votes}</p>
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
    </>
  );
};

export default MovieDetails;
