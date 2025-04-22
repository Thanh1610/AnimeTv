import config from '@/config';
import Home from '@/pages/Home';
import Search from '@/pages/SearchPage';
import Account from '@/pages/Account';
import ChangePassword from '@/pages/ChangePassword';
import GenrePage from '@/pages/GenrePage';
import NationPage from '@/pages/NationPage';
import { euroAmericaCountries } from '@/config/countryCodes';
import FilterResultsPage from '@/pages/FilterResultsPage';

const europeAmerica = euroAmericaCountries.join('|');

const genres = [
    { path: '/the-loai/hanh-dong/page/:page', title: 'Phim Thể Loại Hành Động', withGenres: '28' },
    { path: '/the-loai/phieu-luu/page/:page', title: 'Phim Thể Loại Phiêu Lưu', withGenres: '12' },
    { path: '/the-loai/gia-tuong/page/:page', title: 'Phim Thể Loại Giả Tưởng', withGenres: '14' },
];

const nations = [
    {
        path: '/quoc-gia/trung-quoc/page/:page',
        title: 'Phim Trung Quốc',
        with_origin_country: 'CN',
    },
    {
        path: '/quoc-gia/nhat-ban/page/:page',
        title: 'Phim Nhật Bản',
        with_origin_country: 'JP',
    },
    {
        path: '/quoc-gia/au-my/page/:page',
        title: 'Phim Âu Mỹ',
        with_origin_country: europeAmerica,
    },
];

export const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.search, component: Search },
    { path: config.routes.account, component: Account },
    { path: config.routes.changePassword, component: ChangePassword },

    ...genres.map((genre) => ({
        path: genre.path,
        component: () => <GenrePage title={genre.title} withGenres={genre.withGenres} />,
    })),

    ...nations.map((nation) => ({
        path: nation.path,
        component: () => <NationPage title={nation.title} nation={nation.with_origin_country} />,
    })),
    {
        path: config.routes.filter,
        component: FilterResultsPage,
    },
];

export const privateRoutes = [];
