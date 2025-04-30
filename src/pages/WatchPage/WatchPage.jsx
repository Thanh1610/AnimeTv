import Filters from '@/layouts/components/Filters';
import MovieListSmall from '@/layouts/components/MovieListSmall';
import * as animationTvServices from '@/apiServices/animationTvServices';
import * as animationMovieServices from '@/apiServices/animationMovieServices';
import * as watchServices from '@/apiServices/watchServices';
import { useFilters } from '@/hook/useFilters';

import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import Watch from './components';

function DetailPage() {
    const [showLayout, setShowLayout] = useState(false);
    const [info, setInfo] = useState({});
    const { applyFilters } = useFilters();
    const location = useLocation();
    const { id, type } = location.state || {};

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const result = await watchServices.watch(id, type);
                result ? setInfo(result) : setInfo({});
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };
        fetchApi();
    }, [id, type]);

    return (
        <div className="bg-[#151d25]">
            <Filters onApplyFilters={applyFilters} />
            {showLayout && <div className="fixed top-0 left-0 z-[100] h-screen w-full bg-black"></div>}

            <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-[70%]">
                    <Watch data={info} showLayout={() => setShowLayout((prev) => !prev)} />
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

export default DetailPage;
