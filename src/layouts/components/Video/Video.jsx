import YouTube from 'react-youtube';
import { faEye, faLightbulb, faUpRightAndDownLeftFromCenter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef } from 'react';

function Video({ data }) {
    const iframeRef = useRef(null);
    const videoId = data?.videos?.results[0]?.key || 'wxcvbL6o55M';
    const btnStyles = `text-shadow box-shadow inline-block rounded-[3px] bg-[#25354c]
                         px-[4px] py-[5px] leading-[17px] font-[11px] text-[#eee] cursor-pointer
                         text-white transition-all duration-700 hover:bg-black`;

    const handleFullscreen = () => {
        const iframe = iframeRef.current;
        if (iframe?.requestFullscreen) {
            iframe.requestFullscreen();
        } else if (iframe?.mozRequestFullScreen) {
            iframe.mozRequestFullScreen();
        } else if (iframe?.webkitRequestFullscreen) {
            iframe.webkitRequestFullscreen();
        } else if (iframe?.msRequestFullscreen) {
            iframe.msRequestFullscreen();
        }
    };

    const onPlayerReady = (event) => {
        iframeRef.current = event.target.getIframe();
    };
    return (
        <>
            {videoId && (
                <div className="relative mt-3.5 w-full pt-[56.25%]">
                    <div className="absolute top-0 left-0 h-full w-full">
                        <YouTube
                            videoId={videoId}
                            className="h-full w-full"
                            opts={{
                                width: '100%',
                                height: '100%',
                                playerVars: {
                                    // autoplay: 1,
                                },
                            }}
                            onReady={onPlayerReady}
                        />
                    </div>
                </div>
            )}
            <div>
                <div className="mt-1 flex items-center justify-end gap-1">
                    <div className={btnStyles} onClick={handleFullscreen}>
                        <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} className="mr-1" />
                        Mở rộng
                    </div>
                    <div className={btnStyles}>
                        <FontAwesomeIcon icon={faLightbulb} className="mr-1" />
                        Tắt đèn
                    </div>
                    <div className={btnStyles}>
                        <FontAwesomeIcon icon={faEye} className="mr-1" />
                        {data.popularity}
                        lượt xem
                    </div>
                </div>
            </div>
        </>
    );
}

export default Video;
