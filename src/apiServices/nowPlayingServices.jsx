import * as request from '@/utils/request';

export const nowPlaying = async (language = 'vi', page = 1) => {
    try {
        const res = await request.get('movie/now_playing', {
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
