const routes = {
    home: '/',
    search: '/search/:value',
    account: '/tai-khoan',
    changePassword: '/tai-khoan/doi-mat-khau',
    genres: '/the-loai/:genre/:id/page/:page',
    nation: '/quoc-gia/:nation/:iso/page/:page',
    filter: '/filter-results',
    detail: '/:name',
    watch: '/:name/:id',
};

export default routes;
