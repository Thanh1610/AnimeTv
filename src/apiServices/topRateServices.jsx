import * as request from '@/utils/request';

export const topRate = async (
    query = '',
    page = 1,
    withGenres = '',
    nation = '',
    sort_by = '',
    type = '',
    with_origin_country = 'C',
    primary_release_year = '',
    first_air_date_year = '',
    language = 'vi',
) => {
    try {
        const res = await request.get('trending/all/day', {
            params: {
                language,
                page,
                nation,
                type,
                primary_release_year,
                first_air_date_year,
                sort_by,
                with_origin_country,
                original_language: with_origin_country,
                query,
                withGenres,
            },
        });

        return res.results;
    } catch (error) {
        console.log(error);
    }
};
