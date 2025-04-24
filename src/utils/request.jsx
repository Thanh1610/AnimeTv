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

export const toSlug = (str) => {
    return str
        .normalize('NFD') // Tách các ký tự có dấu thành ký tự cơ bản và dấu
        .replace(/[\u0300-\u036f]/g, '') // Loại bỏ dấu
        .replace(/đ/g, 'd') // Chuyển đ thành d
        .replace(/Đ/g, 'd') // Chuyển Đ thành d
        .replace(/[^a-zA-Z0-9]/g, '-') // Thay ký tự đặc biệt bằng dấu gạch ngang
        .replace(/-+/g, '-') // Gộp nhiều dấu gạch ngang liên tiếp thành một
        .replace(/^-|-$/g, '') // Loại bỏ dấu gạch ngang ở đầu và cuối
        .toLowerCase(); // Chuyển toàn bộ chuỗi thành chữ thường
};

export default request;
