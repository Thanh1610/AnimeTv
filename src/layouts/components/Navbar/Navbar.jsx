import config from '@/config';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router';
import { useState } from 'react';

import TippyHeadless from '@tippyjs/react/headless';
import clsx from 'clsx';

function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);

    const linkStyles = `block min-w-40 px-3.5 py-2 text-left text-white hover:text-[#6cbbff] transition-all duration-500`;
    return (
        <div className="box-shadow h-12 w-full bg-[#12171b]">
            <div className="content flex h-full items-center gap-1.5">
                <Link
                    to={config.routes.home}
                    className="flex h-full items-center text-[0.875rem] text-[#d0d0d0] hover:bg-black hover:text-[#ea8300]"
                >
                    <div className="px-2.5 py-3.5">AnimeTv</div>
                </Link>
                <TippyHeadless
                    interactive
                    visible={openMenu}
                    onClickOutside={() => setOpenMenu(false)}
                    placement="bottom-end"
                    offset={[0, 0]}
                    render={(attrs) => (
                        <div
                            tabIndex="-1"
                            {...attrs}
                            className="flex w-[37.5rem] items-center justify-between rounded-[0.25rem] bg-[#1f3d58]"
                        >
                            <Link to={config.routes.home} className={linkStyles}>
                                Phiêu Lưu
                            </Link>
                            <Link to={config.routes.home} className={linkStyles}>
                                Giả Tưởng
                            </Link>
                            <Link to={config.routes.home} className={linkStyles}>
                                Hành Động
                            </Link>
                        </div>
                    )}
                >
                    <div
                        className={clsx(
                            'flex h-full items-center text-[0.875rem] text-[#d0d0d0]',
                            'hover:bg-black hover:text-[#ea8300]',
                            openMenu ? 'bg-black text-[#ea8300]' : '',
                        )}
                    >
                        <div className="px-2.5 py-3.5" onClick={() => setOpenMenu(true)}>
                            Thể loại
                            <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
                        </div>
                    </div>
                </TippyHeadless>
            </div>
        </div>
    );
}

export default Navbar;
