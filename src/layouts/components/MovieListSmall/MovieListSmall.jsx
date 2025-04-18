import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import clsx from 'clsx';

import config from '@/config';

function MovieList({ title, fetchMovies, limit }) {
    const [movies, setMovies] = useState([]);
    const [isHover, setIsHover] = useState(null);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await fetchMovies();
            setMovies(limit ? result.slice(0, limit) : result);
        };

        fetchApi();
    }, [fetchMovies, limit]);

    return (
        <div className="px-3.5 pt-2.5 pb-5">
            {/* title */}
            <div className="mt-5 mb-3.5">
                <h2 className="border-b-1 border-[#1d2731]">
                    <span className="danger-text z-50 text-[1rem] font-medium uppercase">{title}</span>
                </h2>
            </div>

            <div className="mb-6 w-full">
                {movies.map((item) => (
                    <div
                        key={item.id}
                        className={clsx(
                            'post flex rounded-[0.25rem] border-b-1 border-[#1d2731] pt-2.5 pr-2.5',
                        )}
                        onMouseEnter={() => setIsHover(item.id)}
                        onMouseLeave={() => setIsHover(null)}
                    >
                        <Link to={config.routes.home} className="mr-4 block text-[717171]">
                            <img
                                src={`${import.meta.env.VITE_IMG_URL}${item.poster_path}`}
                                alt=""
                                className={clsx(
                                    'h-24 w-[4.6875rem]',
                                    isHover === item.id && 'scale-110 transition-transform duration-300',
                                )}
                            />
                        </Link>
                        <div>
                            <Link to={config.routes.home}>
                                <h3
                                    className={clsx(
                                        'mb-[5px] cursor-pointer leading-5 font-medium text-[#d8d8d8]',
                                        'box-orient-vertical line-clamp-2 flex-1 overflow-hidden',
                                        isHover === item.id && 'text-[#e7ac32]',
                                    )}
                                >
                                    {item.title || item.name}
                                </h3>
                                <p
                                    className={clsx(
                                        'text-[11.5px] text-[#8a9eaf]',
                                        'box-orient-vertical line-clamp-2 flex-1 overflow-hidden',
                                    )}
                                >
                                    {item.original_title || item.original_name}(
                                    {item.release_date || item.first_air_date
                                        ? (item.release_date || item.first_air_date).slice(0, 4)
                                        : 'N/A'}
                                    )
                                </p>
                            </Link>
                            <p className="mt-[5px] text-[12px] text-[#e7ac32]">{item.vote_count} lượt xem</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MovieList;
