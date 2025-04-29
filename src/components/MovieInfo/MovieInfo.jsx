import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import React from 'react';
import Tippy from '@tippyjs/react/headless';
import { useNavigate } from 'react-router';
import { twMerge } from 'tailwind-merge';

import { toSlug } from '@/utils/request';
import { countryCodes } from '@/config/countryCodes';
import MovieTooltip from '@/components/MovieTooltip';

function MovieInfo({ data }) {
    const [isHover, setIsHover] = useState(false);
    const countryMap = Object.fromEntries(countryCodes.map(({ code, name }) => [code, name]));
    const countries = data.origin_country?.map((code) => countryMap[code] || code).join(', ');
    const navigate = useNavigate();

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

    const formatViewCount = (count) => {
        const num = Number(count);
        return `${Math.round(num)}K lượt xem`;
    };

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
                        <MovieTooltip data={data} countries={countries} />
                    </div>
                )}
            >
                <div
                    className="group relative overflow-hidden rounded-[0.625rem]"
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                    onClick={handleClick}
                >
                    {/* status */}
                    <span
                        className={twMerge(
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
                        className={twMerge(
                            'btn-danger absolute right-0.5 bottom-14 z-[1000]',
                            'rounded-[0.1875rem] p-0.5 px-1 text-[0.6875rem] text-white',
                        )}
                    >
                        {formatViewCount(data.popularity)}
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
