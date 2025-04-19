import * as request from '@/utils/request';

export const topRate = async (language = 'vi', page = 1) => {
    try {
        const res = await request.get('trending/all/day', {
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

topRate();
