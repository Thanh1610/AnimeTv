import { useState, useEffect } from 'react';

function useMoviesFetch({
    fetchMovies,
    limit,
    query = '',
    currentPage,
    withGenres,
    nation,
    sort_by,
    type,
    with_origin_country,
    primary_release_year,
    first_air_date_year,
}) {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        let isMounted = true;
        setIsLoading(true);

        const fetchApi = async () => {
            try {
                const result = await fetchMovies(
                    query,
                    currentPage,
                    withGenres,
                    nation,
                    sort_by,
                    type,
                    with_origin_country,
                    primary_release_year,
                    first_air_date_year,
                );

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
    }, [
        fetchMovies,
        query,
        currentPage,
        withGenres,
        sort_by,
        type,
        with_origin_country,
        primary_release_year,
        first_air_date_year,
        nation,
        limit,
    ]);

    return { movies, isLoading };
}

export default useMoviesFetch;
