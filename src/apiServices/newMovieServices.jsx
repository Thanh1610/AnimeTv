import * as request from '@/utils/request';

export const newMovie = async (language = 'vi', page = 1) => {
    try {
        const res = await request.get('trending/movie/day', {
            params: {
                params: {
                    language,
                    page,
                },
            },
        });

        return res.results;
    } catch (error) {
        console.log(error);
    }
};

newMovie();
