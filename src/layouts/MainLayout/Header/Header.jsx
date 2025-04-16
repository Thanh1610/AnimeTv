import clsx from 'clsx';
import { Logo } from '@/components/icons';
import Search from '@/components/Search';

function Header() {
    return (
        <div
            className={clsx(
                'flex items-center bg-[var(--primary)]',
                'h-[var(--header-height)] w-full transition-all duration-500',
                'bg-[linear-gradient(to_right,_#234a71_0%,_#101519_51%,_#151d25_100%)] bg-[length:200%_100%]',
            )}
        >
            <div className="content flex items-center justify-between">
                <Logo />
                <Search />
                <button
                    className={clsx(
                        'text-shadow box-shadow btn mr-4 px-1 py-4 text-[var(--white)]',
                        'bg-linear-to-r from-[#063458] to-[#1c5e94]',
                        'hover:bg-[#337ab7] hover:from-transparent hover:to-transparent',
                    )}
                >
                    Đăng Nhập
                </button>
            </div>
        </div>
    );
}

export default Header;
