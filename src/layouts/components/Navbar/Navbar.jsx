import NavbarDesktop from '@/components/NavbarDesktop';
import NavbarMobile from '@/components/NavbarMobile';
import { twMerge } from 'tailwind-merge';

function Navbar() {
    //wrapper styles
    const containerWrapper = `container mx-auto flex h-full items-center gap-1.5 
    px-3 sm:px-4 md:px-5 lg:px-6 xl:px-7 2xl:px-8`;

    return (
        <div className="box-shadow w-full bg-[#12171b]">
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
