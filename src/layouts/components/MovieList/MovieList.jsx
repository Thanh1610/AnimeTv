import { useState, useEffect } from 'react';

import MovieInfo from '@/components/MovieInfo';

function MovieList({ title, fetchMovies, limit }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await fetchMovies();
            setMovies(limit ? result.slice(0, limit) : result);
        };

        fetchApi();
    }, [fetchMovies, limit]);

    return (
        <div className="px-3.5 pt-2.5 pb-5">
            {/* title */}
            <div className="mt-5 mb-3.5">
                <h2 className="danger-text text-[1rem] font-medium uppercase">{title}</h2>
            </div>

            <div className="relative">
                <div className="flex gap-3">
                    {movies.map((item) => (
                        <MovieInfo data={item} key={item.id} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MovieList;
