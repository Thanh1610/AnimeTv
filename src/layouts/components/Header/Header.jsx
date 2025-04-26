import { Link } from 'react-router';
import { useState } from 'react';
import Tippy from '@tippyjs/react';
import TippyHeadless from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { twMerge } from 'tailwind-merge';

import config from '@/config';
import { Logo } from '@/components/icons';
import Search from '@/layouts/components/Search';
import Login from '@/components/Login';
import UserMenu from '../UserMenu';
import { useUser } from '@/contexts/UserContext';

function Header() {
    const [openModal, setOpenModal] = useState(false);
    const { user, login } = useUser();

    const [openMenu, setOpenMenu] = useState(false);

    const handleLogin = (user) => {
        login(user);
        setOpenModal(false);
    };

    const handleClick = () => {
        setOpenMenu((prev) => !prev);
    };

    //btn Styles
    const btnStyles = twMerge(
        'hidden md:block box-shadow text-shadow btn mr-4 px-1 py-4 rounded-[20px] text-white',
        'bg-linear-to-r from-[#063458] to-[#1c5e94]',
        'hover:bg-[#337ab7] hover:from-transparent hover:to-transparent',
    );

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
                <Tippy content="Nhấn Enter để tìm kiếm" placement="bottom">
                    <div className={searchStyles}>
                        <Search />
                    </div>
                </Tippy>
                <TippyHeadless
                    onClickOutside={() => setOpenMenu(false)}
                    visible={openMenu}
                    interactive
                    placement="bottom-end"
                    offset={[0, 2]}
                    render={(attrs) => (
                        <div tabIndex="-1" {...attrs}>
                            <UserMenu closeMenu={handleClick} />
                        </div>
                    )}
                >
                    {/* Header.jsx:63 Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release. */}

                    <div>
                        <button className={btnStyles} onClick={user?.name ? handleClick : () => setOpenModal(true)}>
                            {user && user.name ? (
                                <>
                                    {user.name}
                                    <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
                                </>
                            ) : (
                                'Đăng Nhập'
                            )}
                        </button>
                    </div>
                </TippyHeadless>
                {openModal && <Login onClose={() => setOpenModal(false)} onLoginSuccess={handleLogin} />}
            </div>
        </div>
    );
}

export default Header;
