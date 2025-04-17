import clsx from 'clsx';
import { Link } from 'react-router';
import { useState } from 'react';

import config from '@/config';
import { Logo } from '@/components/icons';
import Search from '@/layouts/components/Search';
import Login from '@/components/Login';

function Header() {
    const [openModal, setOpenModal] = useState(false);

    return (
        <div
            className={clsx(
                'bg-primary flex items-center',
                'h-[var(--header-height)] w-full transition-all duration-500',
                'bg-[linear-gradient(to_right,_#234a71_0%,_#101519_51%,_#151d25_100%)] bg-[length:200%_100%]',
            )}
        >
            <div className="content flex items-center justify-between">
                <Link to={config.routes.home} className="ml-4">
                    <Logo />
                </Link>
                <Search />
                <button
                    className={clsx(
                        'text-shadow box-shadow btn mr-4 px-1 py-4 text-[var(--white)]',
                        'bg-linear-to-r from-[#063458] to-[#1c5e94]',
                        'hover:bg-[#337ab7] hover:from-transparent hover:to-transparent',
                    )}
                    onClick={() => setOpenModal(true)}
                >
                    Đăng Nhập
                </button>
                {openModal && <Login onClose={() => setOpenModal(false)} />}
            </div>
        </div>
    );
}

export default Header;
