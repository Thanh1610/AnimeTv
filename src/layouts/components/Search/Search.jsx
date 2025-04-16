import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef } from 'react';

function Search() {
    const [isFocused, setIsFocused] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const inputRef = useRef();

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
    return (
        <div
            className={clsx(
                'h-[2.125rem] w-[27.625rem] bg-[#12171b6e] text-[var(--text)]/10',
                'flex items-center justify-between',
                'overflow-hidden border-1 border-[var(--border)]',
                'transition-all duration-300 ease-in-out',
                isFocused ? 'rounded-none' : 'rounded-3xl',
            )}
            onMouseDown={handleMouseDown}
            onBlur={handleBlur}
        >
            <FontAwesomeIcon icon={faMagnifyingGlass} className="px-2 text-[var(--white)]" />
            <input
                className="h-full w-full text-[#7aa6ce] caret-[#7aa6ce] transition"
                placeholder="Tìm Kiếm Phim..."
                type="text"
                ref={inputRef}
                value={searchValue}
                onChange={handleChange}
            />
            <div onClick={handleClear}>
                <FontAwesomeIcon icon={faCircleXmark} className="px-2 text-[var(--white)]" />
            </div>
        </div>
    );
}

export default Search;
