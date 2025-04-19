import * as request from '@/utils/request';

export const newTV = async (language = 'vi', page = 1) => {
    try {
        const res = await request.get('trending/tv/day', {
            params: {
                language,
                page,
            },
        });

        return res.results;
    } catch (error) {
        console.log(error);
    }
};

newTV();
