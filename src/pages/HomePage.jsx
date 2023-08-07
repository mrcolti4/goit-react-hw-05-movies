import { getTrendMovies } from 'js/API_requests/getTrendMovies';
import { useData } from 'js/useData/useData';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const HomePage = () => {
  const location = useLocation();
  const { data, isFetching, getData } = useData();

  useEffect(() => {
    getData(getTrendMovies());
  }, [getData]);

  return (
    <div>
      HomePage
      <ul>
        {data.map(({ title, id, name }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title ?? name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
