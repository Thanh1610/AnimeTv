import Fliters from '@/layouts/components/Fliters';
import MovieList from '@/layouts/components/MovieList';
import MovieListSmall from '@/layouts/components/MovieListSmall';

import * as animationTvServices from '@/apiServices/animationTvServices';
import * as animationMovieServices from '@/apiServices/animationMovieServices';
import * as nationServices from '@/apiServices/nationServices';
import { useParams } from 'react-router';

function NationPage({ title, nation }) {
    let pageParams = useParams();
    const page = pageParams.page ? parseInt(pageParams.page, 10) : 1;

    return (
        <div className="bg-[#151d25]">
            <Fliters />

            <div className="flex">
                <div className="w-[70%]">
                    <MovieList
                        title={title}
                        fetchMovies={nationServices.nation}
                        pagination
                        currentPage={page}
                        nation={nation}
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

export default NationPage;
