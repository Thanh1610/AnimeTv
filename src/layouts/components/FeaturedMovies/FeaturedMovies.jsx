import { useState, useEffect } from 'react';
import FeaturedMovieCard from '@/components/FeaturedMovieCard';

function FeaturedMovies({ title, fetchMovies, limit }) {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        let isMounted = true;
        setIsLoading(true);

        const fetchApi = async () => {
            try {
                const result = await fetchMovies();

                if (isMounted) {
                    if (!result || result.length === 0) {
                        setMovies([]);
                    } else {
                        setMovies(limit ? result.slice(0, limit) : result);
                    }
                }
            } catch (error) {
                if (isMounted) {
                    console.error('Error fetching movies:', error);
                    setMovies([]);
                }
            } finally {
                if (isMounted) {
                    setIsLoading(false);
                }
            }
        };

        fetchApi();

        return () => {
            isMounted = false;
        };
    }, [fetchMovies, limit]);

    const renderMovies = () => {
        if (movies.length > 0) {
            return (
                <div className="movie-grid">
                    {movies.map((item) => (
                        <FeaturedMovieCard key={item.id} data={item} />
                    ))}
                </div>
            );
        }
        return (
            <div className="w-full text-center text-gray-500">Rất tiếc, không có nội dung nào trùng khớp yêu cầu.</div>
        );
    };

    return (
        <div className="px-3.5 pt-2.5 pb-5">
            {/* title */}
            <div className="mt-5 mb-3.5">
                <h2 className="danger-text text-[1rem] font-medium uppercase">{title}</h2>
            </div>

            <div className="relative">
                {isLoading ? <div className="w-full text-center text-gray-500">Đang tải...</div> : renderMovies()}
            </div>
        </div>
    );
}

export default FeaturedMovies;
