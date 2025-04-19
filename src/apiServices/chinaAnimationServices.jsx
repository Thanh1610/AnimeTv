import * as request from '@/utils/request';

export const chinaAnimation = async (language = 'vi', page = 1) => {
    try {
        const res = await request.get('discover/tv', {
            params: {
                language,
                page,
                with_genres: [16],
                sort_by: 'vote_count.desc',
                with_origin_country: 'CN',
                original_language: 'zh',
            },
        });

        return res.results;
    } catch (error) {
        console.log(error);
    }
};

chinaAnimation();
