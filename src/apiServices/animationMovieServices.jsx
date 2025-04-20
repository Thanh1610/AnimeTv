import * as request from '@/utils/request';

export const animationMovie = async (language = 'vi', page = 1) => {
    try {
        const res = await request.get('trending/movie/day', {
            params: {
                language,
                page,
                with_genres: [16, 10765, 10759],
                sort_by: 'vote_average.desc',
                with_origin_country: 'CN,JP',
                original_language: 'zh,jp',
            },
        });

        return res.results;
    } catch (error) {
        console.log(error);
    }
};

animationMovie();
