import clsx from 'clsx';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

import Loader from 'components/Loader/Loader';
import { getMovieDetail } from 'js/API_requests/getMovieDetail';
import { useData } from 'js/useData/useData';

import styled from './Cast.module.css';
import { childVariants, routeVariants } from 'js/AnimatedList/AnimatedList';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectMovieExtraCast,
  selectMovieExtraError,
  selectMovieExtraIsFetching,
} from 'redux/slices/movieExtras/movieExtrasSlice';
import { getMovieCast } from 'redux/slices/movieExtras/movieExtrasOperations';

const Cast = () => {
  const { movieId } = useParams();
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits`;

  // const { data, isFetching, error, getData } = useData();
  const dispatcher = useDispatch();
  const data = useSelector(selectMovieExtraCast);
  const isFetching = useSelector(selectMovieExtraIsFetching);
  const error = useSelector(selectMovieExtraError);

  const { cast } = data ?? {};

  useEffect(() => {
    dispatcher(getMovieCast(url));
  }, [dispatcher, url]);

  return (
    <>
      {isFetching && <Loader />}
      {Boolean(error) && error.message}
      <motion.ul
        variants={routeVariants}
        initial="initial"
        animate="final"
        className={clsx(styled.cast)}
      >
        {cast &&
          cast
            .slice(0, 10)
            .map(({ id, profile_path, original_name, character }) => {
              return (
                <motion.li variants={childVariants} key={id}>
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
                </motion.li>
              );
            })}
      </motion.ul>
    </>
  );
};

export default Cast;
