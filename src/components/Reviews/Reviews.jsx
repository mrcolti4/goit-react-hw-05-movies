import { getMovieDetail } from 'js/API_requests/getMovieDetail';
import { useData } from 'js/useData/useData';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

import styled from './Reviews.module.css';
import { childVariants, routeVariants } from 'js/AnimatedList/AnimatedList';
import Loader from 'components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectMovieExtraError,
  selectMovieExtraIsFetching,
  selectMovieExtraReviews,
} from 'redux/slices/movieExtras/movieExtrasSlice';
import { getMovieReviews } from 'redux/slices/movieExtras/movieExtrasOperations';
const Reviews = () => {
  const { movieId } = useParams();
  const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews`;
  // const { data, isFetching, error, getData } = useData();

  const dispatcher = useDispatch();
  const data = useSelector(selectMovieExtraReviews);
  const isFetching = useSelector(selectMovieExtraIsFetching);
  const error = useSelector(selectMovieExtraError);

  useEffect(() => {
    dispatcher(getMovieReviews(url));
  }, [dispatcher, url]);
  return (
    <>
      {isFetching && <Loader />}
      {Boolean(error) && error.message}
      <motion.ul variants={routeVariants} initial="initial" animate="final">
        {Boolean(data?.results?.length) &&
          data?.results?.map(({ author, content, id }) => {
            return (
              <motion.li
                variants={childVariants}
                className={styled.reviews_item}
                key={id}
              >
                <p className={styled.reviews_item_title}>Author: {author}</p>
                <p>{content}</p>
              </motion.li>
            );
          })}
        {!Boolean(data?.results?.length) && (
          <li>
            <span>There are no reviews yet</span>
          </li>
        )}
      </motion.ul>
    </>
  );
};

export default Reviews;
