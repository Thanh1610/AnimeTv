import clsx from 'clsx';
import { useState } from 'react';

function Bookmark({ className }) {
    const [bookmarkNumber, setBookmarkNumber] = useState(1);

    const handleBookmarkClick = () => {
        setBookmarkNumber((prev) => (prev === 1 ? 2 : 1));
        alert('Vui lòng đăng nhập để thực hiện chức năng này!');
    };

    const handleBookmarkHover = () => {
        if (bookmarkNumber === 2) {
            setBookmarkNumber(3);
        }
    };

    const handleOnMouseLeave = () => {
        if (bookmarkNumber === 3) {
            setBookmarkNumber(2);
        }
    };
    return (
        <div
            style={{
                backgroundImage: `url(/src/assets/img/bookmark${bookmarkNumber}.png)`,
                backgroundSize: '45px',
                backgroundRepeat: 'no-repeat',
            }}
            className={clsx('shake h-[48px] w-[42px]', className)}
            onClick={handleBookmarkClick}
            onMouseEnter={handleBookmarkHover}
            onMouseLeave={handleOnMouseLeave}
        ></div>
    );
}

export default Bookmark;
