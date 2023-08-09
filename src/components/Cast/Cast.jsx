import clsx from 'clsx';
import Loader from 'components/Loader/Loader';
import { getMovieDetail } from 'js/API_requests/getMovieDetail';
import { useData } from 'js/useData/useData';
import { useParams } from 'react-router-dom';

import styled from './Cast.module.css';
import { FadeIn } from 'components/FadeIn/FadeIn';
import { useFadeIn } from 'js/useFadeIn/useFadeIn';
import { useEffect } from 'react';

const Cast = () => {
  const { movieId } = useParams();
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits`;

  const isVisible = useFadeIn();
  const { data, isFetching, error, getData } = useData();

  const { cast, crew } = data ?? {};

  useEffect(() => {
    getData(getMovieDetail(url));
  }, [getData, url]);

  return (
    <FadeIn data={cast}>
      <ul className={clsx(styled.cast)}>
        {isFetching && <Loader />}
        {cast &&
          cast.map(({ id, profile_path, original_name, character }) => {
            return (
              <li key={id}>
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                      : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
                  }
                  alt={original_name}
                />
                <p>{original_name}</p>
                <p>Character: {character}</p>
              </li>
            );
          })}
      </ul>
    </FadeIn>
  );
};

export default Cast;
