import { useRef, Suspense, useEffect, useState } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import BackLink from '../components/BackLink';
import Loader from '../components/Loader';
import ApiService from '../services/api-service';
const apiService = new ApiService();

export default function MovieDetails() {
  const [movie, setMovie] = useState({});
  const [status, setStatus] = useState('idle');
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    setStatus('pending');
    apiService.movieId = movieId;
    apiService.fetchDetails().then(response => {
      setStatus('resolved');
      setMovie(response);
    });
  }, [movieId]);

  const { original_title, poster_path, vote_average, overview, genres } = movie;
  if (status === 'pending') {
    return <Loader />;
  }
  if (status === 'resolved') {
    return (
      <>
        <BackLink to={backLinkRef.current}>Back to movies</BackLink>
        <div>
          <img src={`https://image.tmdb.org/t/p/w400/${poster_path}`} alt="" />
          <ul>
            <li>{original_title}</li>
            <li>User score: {(vote_average * 10).toFixed(0)}%</li>
            <li>Overview: {overview}</li>
            <li>
              Genres:{' '}
              <ul>
                {genres.map(({ name }) => {
                    return <li key={name}>{name}</li>;
                  })}
              </ul>
            </li>
          </ul>
        </div>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </>
    );
  }
}
