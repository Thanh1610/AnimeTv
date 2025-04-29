import MovieInfo from '@/components/MovieInfo';
import Pagination from '@/components/Pagination';
import { useNavigate } from 'react-router';
import config from '@/config';
import useMoviesFetch from '@/hook/useMoviesFetch';

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
    relate,
    className,
}) {
    const navigate = useNavigate();

    const { movies, isLoading } = useMoviesFetch({
        fetchMovies,
        limit,
        query,
        currentPage,
        withGenres,
        nation,
        sort_by,
        type,
        with_origin_country,
        primary_release_year,
        first_air_date_year,
    });

    const renderMovies = () => {
        if (movies.length > 0) {
            return movies.map((item) => <MovieInfo data={item} key={item.id} className={className} />);
        }
        return (
            <div className="w-full text-center text-gray-500">Rất tiếc, không có nội dung nào trùng khớp yêu cầu.</div>
        );
    };

    const handleSeeAllClick = () => {
        console.log(relate?.nation, relate?.iso);

        if (relate) {
            navigate(
                config.routes.nation
                    .replace(':nation', relate.nation)
                    .replace(':iso', relate.iso)
                    .replace(':page', '1'),
            );
        }
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
                    <div className="grid-info flex gap-3">{renderMovies()}</div>
                )}
                {seeAll && (
                    <div onClick={handleSeeAllClick} className="justify-left mr-7 flex cursor-pointer">
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
