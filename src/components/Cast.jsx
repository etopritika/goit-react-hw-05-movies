import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastItem } from "./Cast.styled";
import ApiService from '../services/api-service';
const apiService = new ApiService();

export default function Cast() {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    apiService.movieId = movieId;
    apiService.fetchCast().then(response => setActors(response)).catch(console.log);
  }, [movieId]);
  return (
    <ul>
      {actors.map(({ profile_path, name, character }) => {
        return (
          <CastItem key={name}>
            <ul>
            <li>
            <img
              src={profile_path === null ? "http://dummyimage.com/200" : `https://image.tmdb.org/t/p/w200/${profile_path}`}
              alt=""
            />
            </li>
            <li>
              {name}
            </li>
            <li>
              Character: {character}
            </li>
          </ul>
          </CastItem>
        );
      })}
    </ul>
  );
}
