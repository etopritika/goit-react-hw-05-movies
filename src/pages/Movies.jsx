import Notiflix from 'notiflix';
import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
// import Loader from '../components/Loader';
import SearchForm from '../components/SearchForm';
import ApiService from '../services/api-service';
const apiService = new ApiService();

export default function Movies() {
  const [movieName, setMovieName] = useState('');
  const [searchParams, setSearchParams] = useSearchParams({});
  const [fetchMovies, setFetchMovies] = useState([]);
  const name = searchParams.get("name") ?? '';
  
  const handleSubmit = e => {
    e.preventDefault();
    if (movieName.trim() === '') {
      return Notiflix.Notify.failure('Enter the name of the movie');
    }
    setSearchParams({ name: movieName });
    setMovieName('');
  };

  const handleInputChange = e => {
    setMovieName(e.currentTarget.value.toLowerCase());
  };

  useEffect(() => {
    if(!name){
      return;
    }
    apiService.query = name;
    apiService.fetchMovies().then(response => {
      setFetchMovies(response);
    });
  }, [name]);

  return (
    <>
      <SearchForm
        handleSubmit={handleSubmit}
        movieName={movieName}
        handleInputChange={handleInputChange}
      />
      {fetchMovies && (
        <ul>
          {fetchMovies.map(({ id, title }) => (
            <Link key={id} to={`${id}`}>
              <li>{title}</li>
            </Link>
          ))}
        </ul>
      )}
    </>
  );
}
