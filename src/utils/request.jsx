import axios from 'axios';

const request = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    },
});

export const get = async (path, options = {}) => {
    const response = await request.get(path, options);
    return response.data;
};

export const toSlug = (str = '') => {
    return str
        .toLowerCase()
        .normalize('NFD') // tách dấu
        .replace(/[\u0300-\u036f]/g, '') // xoá dấu
        .replace(/đ/g, 'd')
        .replace(/Đ/g, 'd')
        .replace(/[^a-z0-9\s-]/g, '') // xoá ký tự đặc biệt
        .trim()
        .replace(/\s+/g, '-') // khoảng trắng → gạch ngang
        .replace(/-+/g, '-') // nhiều dấu "-" liền nhau → 1 dấu
        .replace(/^-+|-+$/g, ''); // bỏ dấu "-" ở đầu/cuối
};

export default request;
