import * as request from '@/utils/request';

export const filters = async (
    query = '',
    page = 1,
    withGenres = '',
    // eslint-disable-next-line no-unused-vars
    nation = '',
    sort_by = 'vote_count.desc',
    type = 'tv',
    with_origin_country = '',
    primary_release_year = '',
    first_air_date_year = '',
    language = 'vi',
) => {
    try {
        // console.log('Fetching movies with:', {
        //     query, // Từ khóa tìm kiếm
        //     page, // Trang hiện tại
        //     withGenres, // Thể loại
        //     sort_by, // Sắp xếp
        //     type, // Loại phim (tv/movie)
        //     with_origin_country, // Quốc gia gốc
        //     primary_release_year,
        //     first_air_date_year, // Năm phát hành
        //     nation, // Quốc gia
        //     language, // Ngôn ngữ
        // });

        const endpoint = type === 'movie' ? 'discover/movie' : 'discover/tv';
        const res = await request.get(endpoint, {
            params: {
                query,
                page,
                with_genres: withGenres,
                sort_by,
                with_origin_country,
                ...(type === 'movie' ? { primary_release_year } : { first_air_date_year }),
                language,
            },
        });

        return res.results;
    } catch (error) {
        console.log(error);
    }
};
