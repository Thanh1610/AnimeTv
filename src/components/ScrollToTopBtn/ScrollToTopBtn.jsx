import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

function ScrollToTopBtn() {
    const [showBtn, setShowBtn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {
                setShowBtn(true);
            } else {
                setShowBtn(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const btnStyles = `fixed right-[14px] bottom-[14px] flex h-[38px] w-[38px]
                        items-center justify-center rounded-[4px] bg-[#10151a] p-1 text-xl leading-9 text-white`;
    return showBtn ? (
        <button className={btnStyles} onClick={scrollToTop}>
            <FontAwesomeIcon icon={faArrowUp} />
        </button>
    ) : null;
}

export default ScrollToTopBtn;
