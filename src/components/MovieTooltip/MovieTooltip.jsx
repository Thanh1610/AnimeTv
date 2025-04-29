import WrapperMovie from '@/components/Popper';
import { faCalendar, faClock } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function MovieTooltip({ data, countries }) {
    return (
        <WrapperMovie>
            <h3 className="w-full border-b-1 border-[#ebebeb] px-3.5 py-2 text-center text-[0.875rem] leading-[1.1] font-medium">
                <span className="text-[#c73d3a]">{data.title || data.name}</span>
            </h3>
            <div className="px-3.5 py-2.5 text-[0.75rem]">
                <div className="mb-2 text-center text-[#1b2b3a]">{data.original_title || data.original_name}</div>
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
                        Đánh Giá: <span className="text-[#337ab7]">{data?.vote_average?.toFixed(2)} / 10</span>
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
    );
}

export default MovieTooltip;
