import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
function Search() {
    const wrapperInput = clsx(
        `h-[2.125rem] w-[27.625rem] overflow-hidden rounded-3xl border-1 border-[var(--border)] text-[var(--text)] bg-[#12171b6e] flex items-center justify-between`,
    );
    return (
        <div className={wrapperInput}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="px-2 text-[var(--white)]" />
            <input
                className="h-full w-full text-[#7aa6ce] caret-[#7aa6ce]"
                placeholder="Tìm Kiếm Phim..."
                type="text"
            />
            <FontAwesomeIcon icon={faCircleXmark} className="px-2 text-[var(--white)]" />
        </div>
    );
}

export default Search;
