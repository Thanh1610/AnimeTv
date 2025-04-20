import clsx from 'clsx';
import { Link } from 'react-router';
import { useState } from 'react';
import Tippy from '@tippyjs/react';
import TippyHeadless from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import config from '@/config';
import { Logo } from '@/components/icons';
import Search from '@/layouts/components/Search';
import Login from '@/components/Login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import UserMenu from '../UserMenu';

function Header() {
    const [openModal, setOpenModal] = useState(false);
    const [userName, setUserName] = useState(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        return storedUser ? storedUser.name : '';
    });
    const [openMenu, setOpenMenu] = useState(false);

    const handleLogin = (name) => {
        setUserName(name);
        setOpenModal(false);
    };

    const handleClick = () => {
        setOpenMenu((prev) => !prev);
    };

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
                <Tippy content="Nhấn Enter để tìm kiếm" placement="bottom">
                    <div>
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
                            <UserMenu />
                        </div>
                    )}
                >
                    {/* Header.jsx:63 Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release. */}
                    <div>
                        <button
                            className={clsx(
                                'text-shadow box-shadow btn mr-4 px-1 py-4 text-white',
                                'bg-linear-to-r from-[#063458] to-[#1c5e94]',
                                'hover:bg-[#337ab7] hover:from-transparent hover:to-transparent',
                            )}
                            onClick={userName ? handleClick : () => setOpenModal(true)}
                        >
                            {userName ? (
                                <>
                                    {userName}
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
