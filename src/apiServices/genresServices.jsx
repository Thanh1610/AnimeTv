import * as request from '@/utils/request';

export const genres = async (with_origin_country = '', page = 1, with_genres, language = 'vi') => {
    try {
        const res = await request.get('discover/movie', {
            params: {
                language,
                page,
                sort_by: 'popularity.desc',
                with_genres,
                with_origin_country,
            },
        });

        return res.results;
    } catch (error) {
        console.log(error);
    }
};
