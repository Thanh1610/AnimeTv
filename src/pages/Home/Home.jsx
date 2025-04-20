import Fliters from '@/layouts/components/Fliters';
import MovieList from '@/layouts/components/MovieList';
import MovieListSmall from '@/layouts/components/MovieListSmall';

import * as topRateServices from '@/apiServices/topRateServices';
import * as newMovieServices from '@/apiServices/newMovieServices';
import * as newTVServices from '@/apiServices/newTVServices';
import * as nowPlayingServices from '@/apiServices/nowPlayingServices';
import * as animationTvServices from '@/apiServices/animationTvServices';
import * as animeServices from '@/apiServices/animeServices';
import * as chinaAnimationServices from '@/apiServices/chinaAnimationServices';
import * as animationMovieServices from '@/apiServices/animationMovieServices';

function Home() {
    return (
        <div className="bg-[#151d25]">
            <Fliters />
            <MovieList title="Phim Đề Cử" fetchMovies={topRateServices.topRate} limit={6} />
            <div className="flex w-full gap-2 px-3.5">
                <div className="w-[50%]">
                    <MovieListSmall
                        title="Phim Lẻ Mới Phát Hành"
                        fetchMovies={newMovieServices.newMovie}
                        limit={3}
                    />
                </div>
                <div className="w-[50%]">
                    <MovieListSmall
                        title="Phim Bộ Mới Phát Hành"
                        fetchMovies={newTVServices.newTV}
                        limit={3}
                    />
                </div>
            </div>
            <div className="flex">
                <div className="w-[70%]">
                    <MovieList
                        title="Phim chiếu rạp"
                        fetchMovies={nowPlayingServices.nowPlaying}
                        limit={12}
                        seeAll
                    />

                    <MovieList
                        title="Phim anime Nhật Bản"
                        fetchMovies={animeServices.anime}
                        limit={12}
                        seeAll
                    />
                    <MovieList
                        title="Phim hoạt hình Trung Quốc"
                        fetchMovies={chinaAnimationServices.chinaAnimation}
                        limit={12}
                        seeAll
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

export default Home;
