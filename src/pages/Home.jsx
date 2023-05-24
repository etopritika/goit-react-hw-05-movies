import "./Home.css"
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import ApiService from "../services/api-service";
const apiService = new ApiService();


export default function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        apiService.fetchTrending().then(response => setMovies(response));
      }, []);
    return (
        <>
        <h1>Trending today</h1>
        {movies.map(movie => {return<Link key={movie.id} to={`movies/${movie.id}`}>{movie.title}</Link>})}
        </>
    )
}