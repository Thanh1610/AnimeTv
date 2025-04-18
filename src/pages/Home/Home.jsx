import Fliters from '@/layouts/components/Fliters';
import MovieList from '@/layouts/components/MovieList';
import MovieListSmall from '@/layouts/components/MovieListSmall';

import * as topRateServices from '@/apiServices/topRateServices';
import * as singleMovieServices from '@/apiServices/singleMovieServices';
import * as tvSeriesServices from '@/apiServices/tvSeriesServices';

function Home() {
    return (
        <div className="bg-[#151d25]">
            <Fliters />
            <MovieList title="Đánh Giá Cao Nhất" fetchMovies={topRateServices.topRate} limit={6} />
            <div className="flex w-full gap-2 px-3.5">
                <div className="w-[50%]">
                    <MovieListSmall
                        title="Phim Lẻ Mới Phát Hành"
                        fetchMovies={singleMovieServices.singleMovie}
                        limit={3}
                    />
                </div>
                <div className="w-[50%]">
                    <MovieListSmall
                        title="Phim Bộ Mới Phát Hành"
                        fetchMovies={tvSeriesServices.tvSeries}
                        limit={3}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
