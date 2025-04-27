import * as request from '@/utils/request';

export const anime = async (language = 'vi', page = 1) => {
    try {
        const res = await request.get('discover/tv', {
            params: {
                language,
                page,
                with_genres: [16],
                sort_by: 'vote_count.desc',
                with_origin_country: 'JP',
                original_language: 'jp',
            },
        });

        return res.results;
    } catch (error) {
        console.log(error);
    }
};
