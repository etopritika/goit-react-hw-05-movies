import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>{['movie-1','movie-2','movie-3','movie-4'].map(mov => {return<Link key={mov} to={`movies/${mov}`}>{mov}</Link>})}</>
    )
}