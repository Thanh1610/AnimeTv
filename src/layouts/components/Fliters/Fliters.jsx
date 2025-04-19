import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { useState } from 'react';

function Fliters() {
    const [openFilters, setOpenFilters] = useState(false);

    const filters = [
        {
            options: ['Sắp xếp', 'Thời gian cập nhật', 'Thời gian đăng', 'Năm sản xuất', 'Lượt xem'],
        },
        {
            options: ['Định dạng', 'Phim bộ', 'Phim lẻ'],
        },
        {
            options: ['Thể loại', 'Hành động', 'Hài hước', 'Tình cảm'],
        },
        {
            options: ['Quốc gia', 'Nhật Bản', 'Hàn Quốc', 'Trung Quốc'],
        },
        {
            options: [
                'Năm',
                '2025',
                '2024',
                '2023',
                '2022',
                '2021',
                '2020',
                '2019',
                '2018',
                '2017',
                '2016',
                '2015',
                '2014',
                '2013',
                '2012',
                '2011',
            ],
        },
    ];

    const selectStyles = `h-8 min-w-36 rounded-3xl border-1 border-[#1f2d39] bg-[#151d25] 
                        px-2.5 py-1 text-white focus:outline-none`;
    return (
        <>
            {/* heading */}
            <div className="border-b-1 border-[#1d2731]">
                <div className="flex items-center justify-between p-3.5">
                    <div>
                        MoviXTv | Phim Moi | Phim Hay | Xem Phim Online | Phim China | Xem hoạt Hình Trung
                        Quốc | hh3d
                    </div>
                    <div className="text-[#7aa6ce]" onClick={() => setOpenFilters((prev) => !prev)}>
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
                            <select key={index} className={selectStyles}>
                                {filter.options.map((option, i) => (
                                    <option key={i}>{option}</option>
                                ))}
                            </select>
                        ))}

                        <button className="btn btn-danger w-40 text-white">Lọc Phim</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Fliters;
