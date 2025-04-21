import * as request from '@/utils/request';

export const nation = async (with_genres = '', page = 1, language = 'vi', with_origin_country) => {
    try {
        const res = await request.get('discover/tv', {
            params: {
                language,
                page,
                with_genres,
                with_origin_country,
                sort_by: 'vote_count.desc',
            },
        });

        console.log(res.results);

        return res.results;
    } catch (error) {
        console.log(error);
    }
};

nation();
