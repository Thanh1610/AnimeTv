import Filters from '@/layouts/components/Filters';
import MovieList from '@/layouts/components/MovieList';
import MovieListSmall from '@/layouts/components/MovieListSmall';
import * as animationTvServices from '@/apiServices/animationTvServices';
import * as animationMovieServices from '@/apiServices/animationMovieServices';
import * as filtersServices from '@/apiServices/filtersServices';
import { useFilters } from '@/hook/useFilters';

import { useParams } from 'react-router';

function FilterResultsPage() {
    const { filterParams, applyFilters } = useFilters();

    let pageParams = useParams();
    const page = pageParams.page ? parseInt(pageParams.page, 10) : 1;

    return (
        <div className="bg-[#151d25]">
            <Filters onApplyFilters={applyFilters} />

            <div className="flex">
                <div className="w-[70%]">
                    <MovieList
                        title="Kết Quả Tìm Kiếm"
                        fetchMovies={filtersServices.filters}
                        withGenres={filterParams.with_genres}
                        sort_by={filterParams.sort_by}
                        type={filterParams.type}
                        with_origin_country={filterParams.with_origin_country}
                        primary_release_year={filterParams.primary_release_year}
                        first_air_date_year={filterParams.first_air_date_year}
                        pagination
                        currentPage={page}
                    />
                </div>

                <div className="w-[30%]">
                    <MovieListSmall
                        title="Hoạt Hình Bộ AnimeTv"
                        fetchMovies={animationTvServices.animationTv}
                        limit={5}
                    />

                    <MovieListSmall
                        title="Hoạt Hình Lẻ AnimeTv"
                        fetchMovies={animationMovieServices.animationMovie}
                        limit={5}
                    />
                </div>
            </div>
        </div>
    );
}

export default FilterResultsPage;
