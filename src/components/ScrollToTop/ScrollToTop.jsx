import { useEffect } from 'react';
import { useLocation } from 'react-router';

const ScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Cuộn trang về đầu mỗi khi route thay đổi
    }, [location]);

    return null;
};

export default ScrollToTop;
