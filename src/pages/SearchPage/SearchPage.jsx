import Filters from '@/layouts/components/Filters';
import MovieList from '@/layouts/components/MovieList';
import MovieListSmall from '@/layouts/components/MovieListSmall';
import * as animationTvServices from '@/apiServices/animationTvServices';
import * as animationMovieServices from '@/apiServices/animationMovieServices';
import * as searchServices from '@/apiServices/searchServices';
import { useFilters } from '@/hook/useFilters';

import { useParams } from 'react-router';

function SearchPage() {
    let searchParams = useParams();
    const value = searchParams.value;
    const { applyFilters } = useFilters();

    return (
        <div className="bg-[#151d25]">
            <Filters onApplyFilters={applyFilters} />

            <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-[70%]">
                    <MovieList title={`Tìm kiếm Phim: ${value}`} fetchMovies={searchServices.search} query={value} />
                </div>

                <div className="w-full lg:w-[30%]">
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

export default SearchPage;
