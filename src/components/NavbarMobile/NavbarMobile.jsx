/* eslint-disable no-unused-vars */
import { faBars, faEllipsisVertical, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence, motion } from 'motion/react';
import { twMerge } from 'tailwind-merge';
import { useState } from 'react';
import { useUser } from '@/contexts/UserContext';

import Search from '@/layouts/components/Search';
import BtnLogin from '@/components/BtnLogin';
import NavbarDesktop from '@/components/NavbarDesktop';
import UserMenu from '@/components/UserMenu';
import Login from '../Login';

function NavbarMobile({ containerWrapper }) {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [showSetting, setShowSetting] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const { user } = useUser();

    const baseMenuClass = 'w-full flex-col items-start border-t-1 border-[#ccc]/30 bg-[#12171b] lg:hidden';

    //menu motion
    const menuMotion = {
        initial: { opacity: 0, x: -100 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 300 },
        transition: { duration: 0.3 },
    };

    // Cấu hình cho từng menu
    const menus = [
        {
            show: showMobileMenu,
            key: 'mobileMenu',
            content: <NavbarDesktop />,
            className: baseMenuClass,
        },
        {
            show: showSearch,
            key: 'search',
            content: <Search />,
            className: twMerge(baseMenuClass, 'p-2.5'),
        },
        {
            show: showSetting,
            key: 'setting',
            content:
                user && user.name ? (
                    <UserMenu closeMenu={() => setShowSetting(false)} />
                ) : (
                    <BtnLogin className="block lg:hidden" />
                ),
            className: twMerge(baseMenuClass, 'p-2.5'),
        },
    ];

    return (
        <>
            <div className={twMerge(containerWrapper, 'flex justify-between lg:hidden')}>
                {/* menu bars */}
                <div
                    className="flex h-full items-center text-[0.875rem] text-[#d0d0d0]"
                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                >
                    <FontAwesomeIcon icon={faBars} className="px-2.5 py-3.5 text-[14px]" />
                </div>

                <div className="flex items-center justify-center">
                    {/* search */}
                    <div
                        className="flex h-full items-center text-[0.875rem] text-[#d0d0d0]"
                        onClick={() => setShowSearch(!showSearch)}
                    >
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="px-2.5 py-3.5 text-[14px]" />
                    </div>
                    {/* setting */}
                    <div
                        className="flex h-full items-center gap-2 text-[0.875rem] text-[#d0d0d0]"
                        onClick={() => setShowSetting(!showSetting)}
                    >
                        <FontAwesomeIcon icon={faEllipsisVertical} className="px-2.5 py-3.5 text-[14px]" />
                    </div>
                </div>
            </div>
            <AnimatePresence>
                {menus.map(
                    (menu) =>
                        menu.show && (
                            <motion.div
                                key={menu.key}
                                {...menuMotion}
                                className={twMerge(containerWrapper, menu.className)}
                            >
                                {menu.content}
                            </motion.div>
                        ),
                )}
            </AnimatePresence>
            {openModal && <Login onClose={() => setOpenModal(false)} />}
        </>
    );
}

export default NavbarMobile;
