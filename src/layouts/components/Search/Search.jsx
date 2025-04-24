import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router';
import { toSlug } from '@/utils/request';

function Search() {
    const [isFocused, setIsFocused] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const inputRef = useRef();
    const navigate = useNavigate();

    const handleMouseDown = () => setIsFocused(true);

    const handleBlur = () => setIsFocused(false);

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
        setIsFocused(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (searchValue !== '') {
            const slug = toSlug(searchValue);
            navigate(`/search/${slug}`);
        }
    };

    return (
        <form
            className={clsx(
                'text-text/10 h-[2.125rem] w-[27.625rem] bg-[#12171b6e]',
                'flex items-center justify-between',
                'overflow-hidden border-1 border-[var(--border)]',
                'transition-all duration-300 ease-in-out',
                isFocused ? 'rounded-none' : 'rounded-3xl',
            )}
            onSubmit={handleSubmit}
            onMouseDown={handleMouseDown}
            onBlur={handleBlur}
        >
            <FontAwesomeIcon icon={faMagnifyingGlass} className="px-2 text-white" />
            <input
                className="h-full w-full text-[#7aa6ce] caret-[#7aa6ce] transition"
                placeholder="Tìm Kiếm Phim, Đạo diễn..."
                type="text"
                required
                ref={inputRef}
                value={searchValue}
                onChange={handleChange}
            />
            <div onClick={handleClear}>
                <FontAwesomeIcon icon={faCircleXmark} className="px-2 text-white" />
            </div>
        </form>
    );
}

export default Search;
