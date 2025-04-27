import * as request from '@/utils/request';

export const watch = async (id, type = 'movie') => {
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
                append_to_response: 'videos',
            },
        });

        return res;
    } catch (error) {
        console.log(error);
    }
};
