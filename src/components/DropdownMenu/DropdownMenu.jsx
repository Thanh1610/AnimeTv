/* eslint-disable no-unused-vars */
import { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import clsx from 'clsx';

function DropdownMenu({ trigger, items, placement = 'left', onItemClick, disabled = false }) {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Menu motion
    const menuMotion = {
        initial: { opacity: 0, y: -10 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -10 },
        transition: { duration: 0.2 },
    };

    const handleItemClick = (item) => {
        if (onItemClick) {
            onItemClick(item);
        }
        setIsOpen(false);
    };

    if (disabled) {
        return trigger;
    }

    return (
        <div className="relative w-full lg:w-auto" ref={menuRef}>
            <div
                className={clsx(
                    'flex h-full items-center text-[0.875rem] text-[#d0d0d0]',
                    'hover:bg-black hover:text-[#ea8300]',
                    isOpen ? 'bg-black text-[#ea8300]' : '',
                )}
            >
                <div className="cursor-pointer px-2.5 py-3.5 select-none" onClick={() => setIsOpen(!isOpen)}>
                    {trigger}
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        {...menuMotion}
                        className={clsx(
                            // Chỉ nổi khi lg trở lên
                            'flex w-full flex-col items-center justify-between bg-[#1f3d58]',
                            'lg:absolute lg:top-full',
                            placement === 'left' ? 'lg:left-0' : 'lg:right-0',
                            'lg:z-50 lg:mt-2 lg:w-40 lg:rounded-[0.25rem]',
                        )}
                    >
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className="block w-full min-w-40 cursor-pointer px-3.5 py-2 text-left text-white transition-all duration-500 hover:text-[#6cbbff]"
                                onClick={() => handleItemClick(item)}
                            >
                                {item.label}
                            </div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default DropdownMenu;
