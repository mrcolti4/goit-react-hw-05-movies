import { FadeIn } from 'components/FadeIn/FadeIn';
import { getMovieDetail } from 'js/API_requests/getMovieDetail';
import { useData } from 'js/useData/useData';
import { useFadeIn } from 'js/useFadeIn/useFadeIn';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews`;

  const { results } = useData(getMovieDetail, url);
  const isVisible = useFadeIn();

  return (
    <FadeIn isVisible={isVisible}>
      <ul>
        {results?.length &&
          results.map(({ author, content, id }) => {
            return (
              <li key={id}>
                <p>Author: {author}</p>
                <p>{content}</p>
              </li>
            );
          })}
      </ul>
    </FadeIn>
  );
};

export default Reviews;
