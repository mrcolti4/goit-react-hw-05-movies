import MovieDetails from 'components/MovieDetails/MovieDetails';
import { getSingleMovie } from 'js/API_requests/getSingleMovie';
import { useData } from 'js/useData/useData';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MoviesDetailsPage = () => {
  const { movieId } = useParams();
  const { data: moviesList, isFetching, error, getData } = useData();

  useEffect(() => {
    getData(getSingleMovie(movieId));
  }, [getData]);

  return (
    <section>
      {moviesList && <MovieDetails data={moviesList} isFetching={isFetching} />}
    </section>
  );
};

export default MoviesDetailsPage;
