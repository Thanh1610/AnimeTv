import * as request from '@/utils/request';

export const detail = async (id, type = 'movie', language = 'vi') => {
    if (!id) {
        return null;
    }
    const validTypes = type || 'tv';
    try {
        const enpoint = `${validTypes}/${id}`;
        const res = await request.get(enpoint, {
            params: {
                id,
                type,
                language,
            },
        });
        console.log(res);

        return res;
    } catch (error) {
        console.log(error);
    }
};

detail();
