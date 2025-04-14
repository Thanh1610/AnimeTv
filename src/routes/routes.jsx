import config from '@/config';
import Home from '@/pages/Home';
import New from '@/pages/New';
import Popular from '@/pages/Popular';

export const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.new, component: New },
    { path: config.routes.popular, component: Popular },
];

export const privateRoutes = [];
