import MovieList from 'components/MovieList/MovieList';
import { getTrendMovies } from 'js/API_requests/getTrendMovies';
import { useData } from 'js/useData/useData';
import { useEffect } from 'react';

const HomePage = () => {
  const { data, isFetching, getData } = useData();

  useEffect(() => {
    getData(getTrendMovies());
  }, [getData]);

  return <MovieList movies={data} isFetching={isFetching} />;
};

export default HomePage;
