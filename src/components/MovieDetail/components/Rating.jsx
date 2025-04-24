import { useState } from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

function Rating({ data }) {
    const [hoverStart, setHoverStart] = useState(-1);
    const [Evaluate, setEvaluate] = useState(0);

    return (
        <>
            <div className="flex items-center">
                <FontAwesomeIcon icon={faStar} className="text-3xl text-[#fdae01]" />
                <span className="text-[21px] text-white">{data.vote_average?.toFixed(2)} / 10</span>
                <span className="ml-1">({data.vote_count} lượt)</span>
                <div className="ml-2 flex text-[18px]">
                    {[...Array(10)].map((_, index) => (
                        <FontAwesomeIcon
                            key={index}
                            icon={faStar}
                            className={clsx(
                                'transition duration-200 ease-in-out',
                                hoverStart !== -1
                                    ? index <= hoverStart
                                        ? 'text-[#f5c518]'
                                        : 'text-[#ccc]'
                                    : index < Math.round(data.vote_average)
                                      ? 'text-[#f5c518]'
                                      : 'text-[#ccc]',
                            )}
                            onMouseEnter={() => setHoverStart(index)}
                            onMouseLeave={() => setHoverStart(-1)}
                            onMouseDown={(e) => {
                                e.preventDefault();
                                setEvaluate(index + 1);
                            }}
                        />
                    ))}
                </div>
            </div>
            {Evaluate > 0 && <div className="text-center">Bạn đã đánh giá {Evaluate} sao cho phim này!</div>}
        </>
    );
}

export default Rating;
