import { useParams } from 'react-router-dom';

export default function Cast() {
  const { movieId } = useParams();
  return <>Cast: {movieId}</>;
}
