import NavbarDesktop from '@/components/NavbarDesktop';
import NavbarMobile from '@/components/NavbarMobile';
import { twMerge } from 'tailwind-merge';
import { useEffect, useState } from 'react';

function Navbar() {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                // Cuộn xuống: ẩn navbar
                setShowNavbar(false);
            } else {
                // Cuộn lên: hiện navbar
                setShowNavbar(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    //wrapper styles
    const containerWrapper = `container mx-auto flex h-full items-center gap-1.5 
    px-3 sm:px-4 md:px-5 lg:px-6 xl:px-7 2xl:px-8 `;

    return (
        <div
            className={twMerge(
                'box-shadow sticky top-0 z-[1001] w-full bg-[#12171b]',
                showNavbar ? 'translate-y-0' : '-translate-y-full',
            )}
        >
            {/* desktop*/}
            <div className={twMerge(containerWrapper, 'hidden lg:flex')}>
                <NavbarDesktop className="hidden md:block" />
            </div>

            {/* moblie, tablet */}
            <NavbarMobile containerWrapper={containerWrapper} />
        </div>
    );
}

export default Navbar;
