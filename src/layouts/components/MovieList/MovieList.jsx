import { useState, useEffect } from 'react';
import MovieInfo from '@/components/MovieInfo';

function MovieList({ title }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
            },
        };

        fetch('https://api.themoviedb.org/3/movie/top_rated?language=vi&page=1', options)
            .then((res) => res.json())
            .then((res) => {
                console.log(res.results);
                setMovies(res.results);
            })
            .catch((err) => console.error(err));
    }, []);
    return (
        <div className="px-3.5">
            {/* title */}
            <div className="mt-5 mb-3.5">
                <h2 className="danger-text text-[1rem] font-medium uppercase">{title}</h2>
            </div>

            <div className="hide-scrollbar flex gap-3 overflow-x-auto">
                {movies.map((item) => (
                    <MovieInfo data={item} key={item.id} />
                ))}
            </div>
        </div>
    );
}

export default MovieList;
