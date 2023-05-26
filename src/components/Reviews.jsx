import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewItem } from './Reviews.styled';
import ApiService from '../services/api-service';
const apiService = new ApiService();

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    apiService.movieId = movieId;
    apiService
      .fetchReviews()
      .then(response => setReviews(response))
      .catch(console.log);
  }, [movieId]);
  return (
    <>
      {reviews.length !== 0 && (
        <ul>
          {reviews.map(({ author, content }) => {
            return (
              <ReviewItem key={author}>
                <span>
                  <b>{author}</b>
                </span>
                <br />
                {content}
              </ReviewItem>
            );
          })}
        </ul>
      )}
    </>
  );
}
