import * as request from '@/utils/request';

export const tvSeries = async (language = 'vi', page = 1) => {
    try {
        const res = await request.get('trending/tv/day', {
            params: {
                language,
                page,
            },
        });
        console.log(res.results);

        return res.results;
    } catch (error) {
        console.log(error);
    }
};

tvSeries();
