import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Bookmark, DetailInfo, Rating } from './components';
import { faCaretRight, faSortDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import EpisodeList from './components/EpisodeList';

import MovieList from '@/layouts/components/MovieList';
import * as filtersServices from '@/apiServices/filtersServices';

function MovieDetail({ data }) {
    const [hideEpisode, setHideEpisode] = useState(true);

    const sectionWrapper = 'mb-2.5 rounded-[4px] bg-[#101821] p-3.5';
    const sectionTitle = 'danger-text text-[1rem] font-medium uppercase';
    const sectionContent = 'border-t-1 border-[#1d2731] pt-2.5';

    return (
        <div className="flex flex-col px-3.5">
            <div className="mb-5 flex w-full text-[0.75rem]">
                <div className="relative h-[331px] w-[30%] overflow-hidden rounded-lg">
                    <Bookmark />
                    <img
                        className="h-full w-full object-cover"
                        src={`${import.meta.env.VITE_IMG_URL}${data.poster_path}`}
                        alt=""
                    />

                    <div className="absolute bottom-2.5 left-2.5 flex w-full gap-2 text-white">
                        <div
                            className={'btn btn-esp w-[45%] rounded-[6px]'}
                            onClick={() => setHideEpisode((prev) => !prev)}
                        >
                            <FontAwesomeIcon icon={faSortDown} />
                            <span className="ml-1">Tập phim</span>
                        </div>

                        <div className="btn btn-play w-[45%] rounded-[6px]">
                            <FontAwesomeIcon icon={faCaretRight} />
                            <span className="ml-1">Xem phim</span>
                        </div>
                    </div>
                </div>
                <div className="flex w-[70%] flex-col justify-items-start gap-2.5 px-3.5">
                    <DetailInfo data={data} />
                    <Rating data={data} />
                </div>
            </div>

            {hideEpisode && <EpisodeList data={data} hideEpisode={hideEpisode} />}

            <div className={sectionWrapper}>
                <span className={sectionTitle}>Nội Dung Phim</span>
                <div className={sectionContent}>{data.overview || 'Không có nội dung phim'}</div>
            </div>

            <div className={sectionWrapper}>
                <span className={sectionTitle}>Bình Luận (0)</span>
                <div className={sectionContent}>
                    Vui lòng <span className="cursor-pointer text-[#d98a5e]">đăng nhập</span> để bình luận
                </div>
            </div>

            <MovieList
                title="Phim Liên Quan"
                fetchMovies={filtersServices.filters}
                withGenres={data?.genres?.map((genre) => genre.id).join(',')}
                limit={12}
                seeAll
            />
        </div>
    );
}

export default MovieDetail;
