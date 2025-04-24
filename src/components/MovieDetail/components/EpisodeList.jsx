import { faBarsProgress } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function EpisodeList({ data }) {
    const episodeCount = data?.last_episode_to_air?.episode_number || 0;
    const episodeList = [];
    const episodeStyles = `btn rounded-[4px] bg-[#1f2c3e] transition-all duration-[600]
                            box-shadow text-shadow my-2.5 mr-2 inline-block text-white
                            hover:bg-[#F90]`;
    if (episodeCount > 0) {
        for (let i = episodeCount; i >= 1; i--) {
            episodeList.push(
                <li key={i} className={episodeStyles}>
                    {i}
                </li>,
            );
        }
    } else {
        episodeList.push(
            <li key="full" className={episodeStyles}>
                Full
            </li>,
        );
    }
    return (
        <div>
            <div className="mt-3.5 mb-2.5">
                <span className="rounded-tl-[5px] rounded-tr-[5px] bg-[#0b0f15] px-[9px] py-3 font-semibold text-[#ea9b06]">
                    <FontAwesomeIcon icon={faBarsProgress} className="mr-1" />
                    V.I.P
                </span>
                <div className="rounded-[3px] border-t-1 border-t-[#263a4c] bg-[#0b0f15]">
                    <ul className="px-3 pt-[15px] pb-[5px]">{episodeList}</ul>
                </div>
            </div>
        </div>
    );
}

export default EpisodeList;
