import * as request from '@/utils/request';

export const chinaAnimation = async (
    query = '',
    page = 1,
    withGenres = '',
    nation = '',
    sort_by = 'vote_count.desc',
    type = 'tv',
    with_origin_country = 'CN',
    primary_release_year = '',
    first_air_date_year = '',
    language = 'vi',
) => {
    try {
        const res = await request.get('discover/tv', {
            params: {
                language,
                page,
                with_genres: [16],
                sort_by,
                with_origin_country,
                original_language: 'zh',
                query,
                withGenres,
                nation,
                type,
                primary_release_year,
                first_air_date_year,
            },
        });

        return res.results;
    } catch (error) {
        console.log(error);
    }
};
