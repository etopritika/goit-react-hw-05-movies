import { lazy, Suspense } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
// import Layout from "./Layout";
import Loader from '../components/Loader';
import {Container} from'./App.styled.js';
const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

export default function App(){
  return (
    <Container>
      <header>
        <nav>
          <NavLink to="/">Homepage</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Routes>
        </Suspense>
      </main>
    </Container>
  );
}
