import "./Home.styled";
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ApiService from '../services/api-service';
const apiService = new ApiService();

export default function Home() {
  const [movies, setMovies] = useState([]);
  const homeLocation = useLocation();

  useEffect(() => {
    apiService.fetchTrending().then(response => setMovies(response));
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {movies.map(({ id, title }) => {
        return (
          <Link key={id} to={`movies/${id}`} state={homeLocation}>
            {title}
          </Link>
        );
      })}
    </>
  );
}
