import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {Title, ListLink} from "./Home.styled";
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
      <Title>Trending today</Title>
      <ul>
        {movies.map(({ id, title }) => {
          return (
            <ListLink key={id}>
              <Link to={`movies/${id}`} state={homeLocation}>
                {title}
              </Link>
            </ListLink>
          );
        })}
      </ul>
    </>
  );
}
