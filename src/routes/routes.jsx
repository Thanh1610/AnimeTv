import config from '@/config';
import Home from '@/pages/Home';
import Search from '@/pages/SearchPage';
import Account from '@/pages/Account';
import changePassword from '@/pages/changePassword';

export const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.search, component: Search },
    { path: config.routes.account, component: Account },
    { path: config.routes.changePassword, component: changePassword },
];

export const privateRoutes = [];
