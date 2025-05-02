import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faSortDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useNavigate } from 'react-router';

import EpisodeList from './components/EpisodeList';
import MovieList from '@/layouts/components/MovieList';
import Login from '../Login';
import { toSlug } from '@/utils/request';
import { Bookmark, DetailInfo, Rating } from './components';
import * as filtersServices from '@/apiServices/filtersServices';

function MovieDetail({ data }) {
    const [hideEpisode, setHideEpisode] = useState(true);
    const [openModal, setOpenModal] = useState(false);

    const navigate = useNavigate();

    const slug = toSlug(data?.name || data?.title);

    const handleEpisodeClick = () => {
        if (!data) return;
        navigate(`/${slug}/${data.id}`, {
            state: {
                id: data.id,
                type: data.first_air_date ? 'tv' : 'movie',
            },
        });
    };

    const sectionWrapper = 'mb-2.5 rounded-[4px] bg-[#101821] p-3.5';
    const sectionTitle = 'danger-text text-[1rem] font-medium uppercase';
    const sectionContent = 'border-t-1 border-[#1d2731] pt-2.5';
    const withGenres = data?.genres?.map((genre) => genre.id).join('|');

    return (
        <div className="flex flex-col px-3.5">
            <div className="mb-5 flex w-full flex-col items-center text-[0.75rem] md:flex-row">
                <div className="relative h-[400px] w-[300px] overflow-hidden rounded-lg lg:h-[331px] lg:w-[30%] xl:w-[25%]">
                    <Bookmark className={'absolute mt-1.5 ml-1'} />
                    <img
                        className="h-full w-full object-cover"
                        src={`${import.meta.env.VITE_IMG_URL}${data.poster_path}`}
                        alt=""
                        loading="lazy"
                    />

                    <div className="absolute bottom-2.5 left-2.5 flex w-full gap-2 text-white">
                        <div
                            className={'btn btn-esp w-[45%] rounded-[6px]'}
                            onClick={() => setHideEpisode((prev) => !prev)}
                        >
                            <FontAwesomeIcon icon={faSortDown} />
                            <span className="ml-1">Tập phim</span>
                        </div>

                        <div className="btn btn-play w-[45%] rounded-[6px]" onClick={() => handleEpisodeClick()}>
                            <FontAwesomeIcon icon={faCaretRight} />
                            <span className="ml-1">Xem phim</span>
                        </div>
                    </div>
                </div>
                <div className="flex w-full flex-col justify-items-start gap-2.5 px-3.5 lg:w-[70%]">
                    <DetailInfo data={data} />
                    <Rating data={data} className={'flex items-center'} />
                </div>
            </div>

            {hideEpisode && <EpisodeList data={data} handleEpisodeClick={handleEpisodeClick} />}

            <div className={sectionWrapper}>
                <span className={sectionTitle}>Nội Dung Phim</span>
                <div className={sectionContent}>{data.overview || 'Không có nội dung phim'}</div>
            </div>

            <div className={sectionWrapper}>
                <span className={sectionTitle}>Bình Luận (0)</span>
                <div className={sectionContent}>
                    Vui lòng{' '}
                    <span onClick={() => setOpenModal(true)} className="cursor-pointer text-[#d98a5e]">
                        đăng nhập
                    </span>{' '}
                    để bình luận
                </div>
            </div>
            {openModal && <Login onClose={() => setOpenModal(false)} />}

            <MovieList
                title="Phim Liên Quan"
                fetchMovies={filtersServices.filters}
                withGenres={`${withGenres}`}
                limit={12}
            />
        </div>
    );
}

export default MovieDetail;
