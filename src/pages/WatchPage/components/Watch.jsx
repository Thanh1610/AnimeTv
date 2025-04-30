import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { twMerge } from 'tailwind-merge';
import { useState } from 'react';
import * as filtersServices from '@/apiServices/filtersServices';

import { Bookmark, EpisodeList, Rating } from '@/components/MovieDetail/components';
import Video from '@/layouts/components/Video';
import Login from '@/components/Login';
import MovieList from '@/layouts/components/MovieList';
import { toSlug } from '@/utils/request';
import { useNavigate } from 'react-router';

function Watch({ data, showLayout }) {
    const [showContent, setShowContent] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const navigate = useNavigate();

    const sectionWrapper = 'mb-2.5 rounded-[4px] bg-[#101821] p-3.5';
    const sectionTitle = 'danger-text text-[1rem] font-medium uppercase';
    const sectionContent = 'border-t-1 border-[#1d2731] pt-2.5';
    const wrapperInfo = twMerge(
        'flex items-center justify-between',
        'rounded-[4px] bg-[#36475621] px-[15px] pt-[15px] pb-2',
        'shadow-[0px_3px_20px_2px_rgb(18,24,29)]',
    );
    const vipBtn = 'btn m-0.5 rounded-[2px] bg-[#224361] text-[11px] duration-500 text-white hover:bg-[#276ba9]';
    const withGenres = data?.genres?.map((genre) => genre.id).join('|');
    const handleClick = () => {
        const name = data.title || data.name;
        const id = data.id;
        const type = data.media_type ? data.media_type : data.title ? 'movie' : 'tv';
        const slug = toSlug(name);

        //chuyển hướng
        navigate(`/${slug}`, {
            state: { name, id, type },
        });
    };

    return (
        <div className="px-3.5">
            <Video data={data} showLayout={showLayout} />
            <div className={twMerge(wrapperInfo, 'flex flex-col gap-2 lg:flex-row')}>
                <div className="relative flex">
                    <Bookmark className={'mt-1.5 mr-2'} />
                    <div className="flex flex-col items-start justify-center">
                        <h1
                            onClick={handleClick}
                            className={twMerge(
                                'cursor-pointer text-[18px] text-[#d4d3d3]',
                                'line-clamp-2 leading-[25px] font-medium',
                            )}
                        >
                            {`Xem phim ${data?.title || data?.name}`}
                        </h1>
                        <span
                            className="leading-[26px] font-normal text-[#a5a5a5] hover:text-[#d4a725]"
                            onClick={() => setShowContent(!showContent)}
                        >
                            Nội dung phim
                            <FontAwesomeIcon icon={faAngleDown} className="ml-1" />
                        </span>
                    </div>
                </div>

                <Rating data={data} className={'flex flex-col items-end justify-center'} />
            </div>
            {showContent && (
                <div className={twMerge(sectionWrapper, 'expand-animation my-2.5')}>
                    <div className={twMerge(sectionContent, 'border-none p-0')}>
                        {data.overview || 'Không có nội dung phim'}
                    </div>
                </div>
            )}

            <div className="mx-1 my-2.5 flex items-center justify-center gap-1">
                <span className={vipBtn}>VIP #1</span>
                <span className={vipBtn}>VIP #3</span>
                <span className={vipBtn}>VIP #2</span>
            </div>

            <EpisodeList data={data} handleEpisodeClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />

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

export default Watch;
