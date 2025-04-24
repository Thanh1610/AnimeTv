import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams, useNavigate } from 'react-router';

function Pagination({ totalPages = '20' }) {
    const visibleCount = 5;
    const { page } = useParams();
    const navigate = useNavigate();
    const currentPage = page ? parseInt(page, 10) : 1;
    const basePath = location.pathname.replace(/\/page\/\d+$/, '');

    const handleNext = () => {
        if (currentPage < totalPages) {
            navigate(`${basePath}/page/${currentPage + 1}`);
        }
    };

    const handlePrev = () => {
        if (currentPage > 1) {
            navigate(`${basePath}/page/${currentPage - 1}`);
        }
    };

    const handleClick = (pageNumber) => {
        if (pageNumber !== currentPage) {
            navigate(`${basePath}/page/${pageNumber}`);
        }
    };

    const btnStyles = `btn box-shadow text-shadow rounded-[4px] 
    bg-[#1b364e] text-[13px] text-white hover:bg-[#396792] w-[40px]`;

    const adjustedStart = currentPage > totalPages - visibleCount + 1 ? totalPages - visibleCount + 1 : currentPage;

    const pages = [];
    for (let i = adjustedStart; i < adjustedStart + visibleCount && i <= totalPages; i++) {
        pages.push(i);
    }

    return (
        <div className="mt-5 flex w-full items-center justify-center gap-2">
            {currentPage > 1 && (
                <button className={btnStyles} onClick={handlePrev}>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </button>
            )}

            {pages.map((page) => (
                <button
                    className={`${btnStyles} ${page === currentPage ? 'btn-danger font-bold' : ''}`}
                    key={page}
                    onClick={() => handleClick(page)}
                >
                    {page}
                </button>
            ))}

            {currentPage < totalPages && (
                <button className={btnStyles} onClick={handleNext}>
                    <FontAwesomeIcon icon={faAngleRight} />
                </button>
            )}
        </div>
    );
}

export default Pagination;
