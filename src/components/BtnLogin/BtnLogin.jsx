import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { twMerge } from 'tailwind-merge';
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from 'motion/react';

import Login from '@/components/Login';
import UserMenu from '@/components/UserMenu';
import { useUser } from '@/contexts/UserContext';

function BtnLogin({ className }) {
    const [openModal, setOpenModal] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const menuRef = useRef(null);
    const { user, login } = useUser();

    const handleLogin = (user) => {
        login(user);
        setOpenModal(false);
    };

    const handleClick = () => {
        setOpenMenu((prev) => !prev);
    };

    // close modal
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpenMenu(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    //btn Styles
    const btnStyles = twMerge(
        'hidden md:block box-shadow text-shadow btn mr-4 px-1 py-4 rounded-[20px] text-white',
        'bg-linear-to-r from-[#063458] to-[#1c5e94]',
        'hover:bg-[#337ab7] hover:from-transparent hover:to-transparent',
    );

    // Menu motion
    const menuMotion = {
        initial: { opacity: 0, y: -10 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -10 },
        transition: { duration: 0.2 },
    };

    return (
        <div className="relative" ref={menuRef}>
            <button
                className={twMerge(btnStyles, className)}
                onClick={user?.name ? handleClick : () => setOpenModal(true)}
            >
                {user && user.name ? (
                    <>
                        {user.name}
                        <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
                    </>
                ) : (
                    'Đăng Nhập'
                )}
            </button>

            <AnimatePresence>
                {openMenu && (
                    <motion.div {...menuMotion} className="absolute top-full right-0 z-50 mt-2">
                        <UserMenu closeMenu={handleClick} />
                    </motion.div>
                )}
            </AnimatePresence>

            {openModal && <Login onClose={() => setOpenModal(false)} onLoginSuccess={handleLogin} />}
        </div>
    );
}

export default BtnLogin;
