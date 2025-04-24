import { useState } from 'react';
function Bookmark() {
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
            className={'shake absolute mt-1.5 ml-1 h-[48px] w-[42px]'}
            onClick={handleBookmarkClick}
            onMouseEnter={handleBookmarkHover}
            onMouseLeave={handleOnMouseLeave}
        ></div>
    );
}

export default Bookmark;
