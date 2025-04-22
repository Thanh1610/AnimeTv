import { faCirclePlay, faCalendar, faClock } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { useState } from 'react';
import React from 'react';
import Tippy from '@tippyjs/react/headless';

import { countryCodes } from '@/config/countryCodes';
import WrapperMovie from '@/components/Popper';

function MovieInfo({ data }) {
    const [isHover, setIsHover] = useState(false);
    const countryMap = Object.fromEntries(countryCodes.map(({ code, name }) => [code, name]));

    const countries = data.origin_country?.map((code) => countryMap[code] || code).join(', ');

    return (
        <>
            <Tippy
                appendTo={document.body}
                visible={isHover}
                offset={[0, 16]}
                placement="top"
                interactive
                render={(attrs) => (
                    <div tabIndex="-1" {...attrs}>
                        <WrapperMovie>
                            <h3 className="w-full border-b-1 border-[#ebebeb] px-3.5 py-2 text-center text-[0.875rem] leading-[1.1] font-medium">
                                <span className="text-[#c73d3a]">{data.title || data.name}</span>
                            </h3>
                            <div className="px-3.5 py-2.5 text-[0.75rem]">
                                <div className="mb-2 text-center text-[#1b2b3a]">
                                    {data.original_title || data.original_name}
                                </div>
                                <div>
                                    <div className="flex items-center justify-center gap-2 text-[#545454]">
                                        <FontAwesomeIcon icon={faCalendar} />
                                        {data.release_date || data.first_air_date}
                                        <FontAwesomeIcon icon={faClock} />
                                    </div>

                                    <div className="my-2.5 line-clamp-2 overflow-hidden text-ellipsis whitespace-normal text-[#909090]">
                                        {data.overview}
                                    </div>
                                    <div className="my-1 text-[#545454]">
                                        Đánh Giá:{' '}
                                        <span className="text-[#337ab7]">
                                            {data?.vote_average?.toFixed(2)} / 10
                                        </span>
                                    </div>
                                    <div className="my-1 text-[#545454]">
                                        {countries ? 'Quốc Gia:' : 'Ngôn Ngữ Gốc:'}{' '}
                                        <span className="text-[#337ab7]">
                                            {countries || data.original_language || 'Không xác định'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </WrapperMovie>
                    </div>
                )}
            >
                <div
                    className="group relative flex h-[260px] w-[180px] flex-shrink-0 overflow-hidden rounded-[0.625rem]"
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                >
                    {/* status */}
                    <span
                        className={clsx(
                            'status absolute top-1 left-1 z-[100] px-1.5 py-0.5 text-[0.6875rem] text-white',
                            'z-[1000] rounded-tl-[0.5rem] rounded-tr-[0.1875rem] rounded-br-[0.5rem]',
                        )}
                    >
                        Vietsub - FHD
                    </span>

                    {/* img */}
                    <img
                        className="h-full w-full transition-transform duration-300 group-hover:scale-125"
                        src={`${import.meta.env.VITE_IMG_URL}${data.poster_path}`}
                        alt=""
                    />

                    <span
                        className={clsx(
                            'btn-danger absolute right-0.5 bottom-14 z-[1000]',
                            'rounded-[0.1875rem] p-0.5 px-1 text-[0.6875rem] text-white',
                        )}
                    >
                        {data.popularity} lượt xem
                    </span>

                    {/* info */}
                    <div className="bg-blur absolute bottom-0 z-[1000] w-full overflow-hidden px-2.5 pt-2 pb-1">
                        <h3 className="mb-1 line-clamp-1 overflow-hidden leading-5 text-ellipsis whitespace-normal text-white">
                            {data.title || data.name}
                        </h3>
                        <p className="text-text line-clamp-1 overflow-hidden text-ellipsis whitespace-normal">
                            {data.original_title || data.original_name}
                        </p>
                    </div>

                    {isHover && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                            <FontAwesomeIcon icon={faCirclePlay} className="text-3xl" />
                        </div>
                    )}
                </div>
            </Tippy>
        </>
    );
}

export default MovieInfo;
