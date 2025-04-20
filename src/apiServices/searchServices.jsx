import * as request from '@/utils/request';

export const search = async (query, language = 'vi', page = 1) => {
    try {
        const res = await request.get('search/multi', {
            params: {
                language,
                page,
                query,
            },
        });

        return res.results;
    } catch (error) {
        console.log(error);
    }
};

search();
