import config from '@/config';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router';
import { useState } from 'react';
import TippyHeadless from '@tippyjs/react/headless';
import clsx from 'clsx';
import { euroAmericaCountries } from '@/config/countryCodes';

function Navbar() {
    const [openGenre, setOpenGenre] = useState(false);
    const [openNation, setOpenNation] = useState(false);

    const europeAmerica = euroAmericaCountries.join('|');

    const genres = [
        { name: 'Phiêu Lưu', slug: 'phieu-luu', id: '12' },
        { name: 'Giả Tưởng', slug: 'gia-tuong', id: '14' },
        { name: 'Hành Động', slug: 'hanh-dong', id: '28' },
    ];

    const nations = [
        { name: 'Trung Quốc', slug: 'china', iso: 'CN' },
        { name: 'Nhật Bản', slug: 'japan', iso: 'JP' },
        { name: 'Âu Mỹ', slug: 'europeAmerica', iso: europeAmerica },
    ];

    const linkStyles = `block min-w-40 px-3.5 py-2 text-left text-white hover:text-[#6cbbff] transition-all duration-500`;
    return (
        <div className="box-shadow h-12 w-full bg-[#12171b]">
            <div className="content flex h-full items-center gap-1.5">
                <Link
                    to={config.routes.home}
                    className="flex h-full items-center text-[0.875rem] text-[#d0d0d0] hover:bg-black hover:text-[#ea8300]"
                >
                    <div className="px-2.5 py-3.5">MoviXTv</div>
                </Link>
                <TippyHeadless
                    appendTo={document.body}
                    interactive
                    visible={openGenre}
                    onClickOutside={() => setOpenGenre(false)}
                    placement="bottom-end"
                    offset={[0, 0]}
                    render={(attrs) => (
                        <div
                            tabIndex="-1"
                            {...attrs}
                            className="flex w-[37.5rem] items-center justify-between rounded-[0.25rem] bg-[#1f3d58]"
                        >
                            {genres.map(({ name, slug, id }) => (
                                <Link
                                    key={id}
                                    to={config.routes.genres
                                        .replace(':genre', slug)
                                        .replace(':id', id)
                                        .replace(':page', '1')}
                                    className={linkStyles}
                                >
                                    {name}
                                </Link>
                            ))}
                        </div>
                    )}
                >
                    <div
                        className={clsx(
                            'flex h-full items-center text-[0.875rem] text-[#d0d0d0]',
                            'hover:bg-black hover:text-[#ea8300]',
                            openGenre ? 'bg-black text-[#ea8300]' : '',
                        )}
                    >
                        <div
                            className="cursor-pointer px-2.5 py-3.5 select-none"
                            onClick={() => setOpenGenre((prev) => !prev)}
                        >
                            Thể loại
                            <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
                        </div>
                    </div>
                </TippyHeadless>

                <TippyHeadless
                    appendTo={document.body}
                    interactive
                    visible={openNation}
                    onClickOutside={() => setOpenNation(false)}
                    placement="bottom-end"
                    offset={[0, 0]}
                    render={(attrs) => (
                        <div
                            tabIndex="-1"
                            {...attrs}
                            className="flex w-[37.5rem] items-center justify-between rounded-[0.25rem] bg-[#1f3d58]"
                        >
                            {nations.map(({ name, slug, iso }) => (
                                <Link
                                    key={iso}
                                    to={config.routes.nation
                                        .replace(':nation', slug)
                                        .replace(':iso', iso)
                                        .replace(':page', '1')}
                                    className={linkStyles}
                                >
                                    {name}
                                </Link>
                            ))}
                        </div>
                    )}
                >
                    <div
                        className={clsx(
                            'flex h-full items-center text-[0.875rem] text-[#d0d0d0]',
                            'hover:bg-black hover:text-[#ea8300]',
                            openNation ? 'bg-black text-[#ea8300]' : '',
                        )}
                    >
                        <div
                            className="cursor-pointer px-2.5 py-3.5 select-none"
                            onClick={() => setOpenNation((prev) => !prev)}
                        >
                            Quốc gia
                            <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
                        </div>
                    </div>
                </TippyHeadless>
            </div>
        </div>
    );
}

export default Navbar;
