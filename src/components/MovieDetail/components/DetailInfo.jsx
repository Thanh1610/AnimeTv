import { faCalendar, faClock } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toSlug } from '@/utils/request';
import { useNavigate } from 'react-router';

function DetailInfo({ data }) {
    const navigate = useNavigate();
    const handleNationClick = (country) => {
        if (!country) return;
        const nationName = toSlug(country?.name);
        const iso = country?.iso_3166_1;
        navigate(`/quoc-gia/${nationName}/${iso}/page/1`);
    };

    const handleGenreClick = (genre) => {
        if (!genre) return;
        const genreName = toSlug(genre?.name);
        navigate(`/the-loai/${genreName}/${genre.id}/page/1`);
    };

    return (
        <>
            <h1 className="mt-5 mb-2.5 text-[20px] font-bold">{data.name || data.title}</h1>
            <p className="py-1 text-[#afafaf]">{data.original_name || data.original_title}</p>
            <div className="flex items-center justify-start gap-1.5">
                <FontAwesomeIcon icon={faCalendar} />
                <span className="text-[#82b0da]">{data.release_date || data.first_air_date}</span>
                <FontAwesomeIcon icon={faClock} />
                {data.episode_run_time && <div>{data.episode_run_time} phút/tập</div>}
                {data.runtime && <div>{data.runtime} phút</div>}
            </div>
            <p>
                <span>Đang phát:</span>
                <span className="episode-gradient ml-1 rounded-[4px] px-3 py-1 text-[11px] text-white">
                    {data.last_episode_to_air ? `Tập ${data.last_episode_to_air.episode_number}` : 'Viettsub - FHD'}
                </span>
            </p>
            <p>
                <span>Tập mới nhất:</span>
                <span className="ml-1 cursor-pointer rounded-[4px] bg-[#243d5f] px-2.5 py-1 text-[12px] text-white">
                    {data.next_episode_to_air ? `${data.next_episode_to_air.episode_number}` : 'Full'}
                </span>
            </p>
            <p>
                <span>Quốc gia:</span>
                <span
                    className="ml-1 text-[#82b0da] hover:text-[#e1effb]"
                    onClick={() => handleNationClick(data?.production_countries[0])}
                >
                    {(data.production_countries && data.production_countries.map((country) => country.name)) ||
                        'Không xác định'}
                </span>
            </p>

            <p className="flex flex-row gap-1">
                <span>Thể loại:</span>
                {data.genres &&
                    data.genres.map((genre, index) => (
                        <span
                            onClick={() => handleGenreClick(genre)}
                            className="text-[#82b0da] hover:text-[#e1effb]"
                            key={genre.id}
                        >
                            {genre.name}
                            {index < data.genres.length - 1 && ', '}
                        </span>
                    ))}
            </p>
        </>
    );
}

export default DetailInfo;
