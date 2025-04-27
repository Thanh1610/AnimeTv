import { Link } from 'react-router';
import { twMerge } from 'tailwind-merge';

import config from '@/config';
import { Logo } from '@/components/icons';
import Search from '@/layouts/components/Search';
import BtnLogin from '@/components/BtnLogin';

function Header() {
    //logo styles
    const logoStyles = twMerge('ml-1 sm:ml-2 md:ml-3 lg:ml-4 xl:ml-5 2xl:ml-6');

    //search styles
    const searchStyles = twMerge('w-full md:w-[330px] lg:w-[360px] xl:w-[442px]');

    //container styles
    const containerStyles = twMerge(
        'container mx-auto',
        ' flex flex-col md:flex-row items-center justify-between',
        'px-4 md:px-5 lg:px-6 xl:7 2xl-8 my-2.5 md:my-0',
    );

    //header styles
    const headerStyles = twMerge(
        'bg-primary flex items-center',
        'bg-[linear-gradient(to_right,_#234a71_0%,_#101519_51%,_#151d25_100%)] bg-[length:200%_100%]',
        'h-auto md:h-[var(--header-height)] w-full transition-all duration-500',
    );

    return (
        <div className={headerStyles}>
            <div className={containerStyles}>
                {/* logo */}
                <Link
                    to={config.routes.home}
                    onClick={(e) => {
                        if (window.location.pathname === config.routes.home) {
                            e.preventDefault();
                            window.location.reload();
                        }
                    }}
                    className={logoStyles}
                >
                    <Logo />
                </Link>

                {/* search */}
                <div className={searchStyles}>
                    <Search />
                </div>

                {/* BtnLogin */}
                <BtnLogin />
            </div>
        </div>
    );
}

export default Header;
