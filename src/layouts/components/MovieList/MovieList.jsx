import { useState, useEffect } from 'react';

import MovieInfo from '@/components/MovieInfo';
import Pagination from '@/components/Pagination';

function MovieList({
    title,
    fetchMovies,
    limit,
    seeAll,
    query = '',
    withGenres,
    sort_by,
    type,
    with_origin_country,
    primary_release_year,
    first_air_date_year,
    nation,
    pagination,
    currentPage,
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

    const renderMovies = () => {
        if (movies.length > 0) {
            return movies.map((item) => <MovieInfo data={item} key={item.id} />);
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
                {isLoading ? (
                    <div className="w-full text-center text-gray-500">Đang tải...</div>
                ) : (
                    <div className="flex flex-wrap gap-3">{renderMovies()}</div>
                )}
                {seeAll && (
                    <div className="mr-7 flex justify-end">
                        <div className="see-all my-[5px] w-[30%] rounded-[20px] py-1 pr-3.5 !text-right text-white">
                            Xem tất cả
                        </div>
                    </div>
                )}
            </div>

            {pagination && <Pagination currentPage={currentPage} totalPages={20} />}
        </div>
    );
}

export default MovieList;
