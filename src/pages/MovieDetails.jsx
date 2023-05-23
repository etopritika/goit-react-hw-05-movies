import { useParams, Link, Outlet } from 'react-router-dom';

export default function MovieDetails() {
  const { movieId } = useParams();
  // console.log(movieID);
  return (
    <>
      <h1>MovieDetails: {movieId}</h1>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
