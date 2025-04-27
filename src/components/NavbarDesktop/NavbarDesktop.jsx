/* eslint-disable no-unused-vars */
import config from '@/config';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router';
import { euroAmericaCountries } from '@/config/countryCodes';
import DropdownMenu from '@/components/DropdownMenu';

function NavbarDesktop() {
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

    const handleGenreClick = (genre) => {
        const { slug, id } = genre;
        const url = config.routes.genres.replace(':genre', slug).replace(':id', id).replace(':page', '1');
        window.location.href = url;
    };

    const handleNationClick = (nation) => {
        const { slug, iso } = nation;
        const url = config.routes.nation.replace(':nation', slug).replace(':iso', iso).replace(':page', '1');
        window.location.href = url;
    };

    return (
        <>
            <Link
                to={config.routes.home}
                onClick={(e) => {
                    if (window.location.pathname === config.routes.home) {
                        e.preventDefault();
                        window.location.reload();
                    }
                }}
                className="flex h-full items-center text-[0.875rem] text-[#d0d0d0] hover:bg-black hover:text-[#ea8300]"
            >
                <div className="px-2.5 py-3.5">MoviXTv</div>
            </Link>

            <DropdownMenu
                trigger={
                    <>
                        Thể loại
                        <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
                    </>
                }
                items={genres.map((genre) => ({ label: genre.name, ...genre }))}
                onItemClick={handleGenreClick}
            />

            <DropdownMenu
                trigger={
                    <>
                        Quốc gia
                        <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
                    </>
                }
                items={nations.map((nation) => ({ label: nation.name, ...nation }))}
                onItemClick={handleNationClick}
            />
        </>
    );
}

export default NavbarDesktop;
