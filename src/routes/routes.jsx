/* eslint-disable react-hooks/rules-of-hooks */
import config from '@/config';
import Home from '@/pages/Home';
import Search from '@/pages/SearchPage';
import Account from '@/pages/Account';
import ChangePassword from '@/pages/ChangePassword/ChangePassword';
import GenrePage from '@/pages/GenrePage';
import NationPage from '@/pages/NationPage';
import FilterResultsPage from '@/pages/FilterResultsPage';
import DetailPage from '@/pages/DetailPage';
import WatchPage from '@/pages/WatchPage';

import { useParams } from 'react-router';

export const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.search, component: Search },
    { path: config.routes.account, component: Account },
    { path: config.routes.changePassword, component: ChangePassword },
    { path: config.routes.filter, component: FilterResultsPage },
    { path: config.routes.detail, component: DetailPage },
    {
        path: config.routes.nation,
        component: () => {
            const { iso } = useParams();

            return <NationPage title="Kết Quả Tìm Kiếm" nation={`${iso.toLocaleUpperCase()}`} />;
        },
    },
    {
        path: config.routes.genres,
        component: () => {
            const { id } = useParams();

            return <GenrePage title="Kết Quả Tìm Kiếm" withGenres={id} />;
        },
    },
    {
        path: config.routes.watch,
        component: () => {
            return <WatchPage />;
        },
    },
];

export const privateRoutes = [];
