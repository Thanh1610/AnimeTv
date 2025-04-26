import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { mappings, filters } from '@/config/filterConfig';

function Filters({ onApplyFilters }) {
    const [openFilters, setOpenFilters] = useState(false);
    const [filterValue, setFillterValue] = useState({
        sort_by: '',
        type: 'tv',
        with_genres: '',
        with_original_country: '',
        primary_release_year: '',
    });
    const navigate = useNavigate();

    const selectStyles = `h-8 min-w-36 rounded-3xl border-1 border-[#1f2d39] bg-[#151d25] 
                        px-2.5 py-1 text-white focus:outline-none`;

    const handleFilterChange = (key, value) => {
        setFillterValue((prev) => ({
            ...prev,
            [key]: mappings[key]?.[value] || value,
        }));
        console.log(mappings[key]?.[value] || value);
    };

    const applyFilters = () => {
        if (filterValue.type === 'movie') {
            filterValue.primary_release_year = filterValue.first_air_date_year;
            delete filterValue.first_air_date_year;
        } else if (filterValue.type === 'tv') {
            filterValue.first_air_date_year = filterValue.primary_release_year;
            delete filterValue.primary_release_year;
        }

        if (onApplyFilters) {
            onApplyFilters(filterValue);
        }

        const queryParams = new URLSearchParams(filterValue).toString();
        navigate(`/filter-results?${queryParams}`);
    };
    return (
        <>
            {/* heading */}
            <div className="border-b-1 border-[#1d2731]">
                <div className="flex items-center justify-between p-3.5">
                    <div>
                        MoviXTv | Phim Moi | Phim Hay | Xem Phim Online | Phim China | Xem hoạt Hình Trung Quốc | hh3d
                    </div>
                    <div
                        className="cursor-pointer text-[#7aa6ce] select-none"
                        onClick={() => setOpenFilters((prev) => !prev)}
                    >
                        Lọc phim
                        <FontAwesomeIcon icon={faAngleDown} className="ml-2" />
                    </div>
                </div>
            </div>

            {/* fillter */}
            {openFilters && (
                <div className={clsx('dropdown flex items-center pt-3.5 pb-6')}>
                    <div className="mx-3.5 mb-2.5 flex w-full items-center justify-between gap-2">
                        {filters.map((filter, index) => (
                            <select
                                key={index}
                                className={selectStyles}
                                onChange={(e) => handleFilterChange(filter.key, e.target.value)}
                            >
                                {filter.options.map((option, i) => (
                                    <option key={i}>{option}</option>
                                ))}
                            </select>
                        ))}

                        <button className="btn btn-danger w-40 rounded-[20px] text-white" onClick={applyFilters}>
                            Lọc Phim
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Filters;
