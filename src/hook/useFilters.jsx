import { useLocation, useNavigate } from 'react-router';

export const useFilters = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Lấy các tham số từ URL
    const queryParams = new URLSearchParams(location.search);
    const filterParams = {
        sort_by: queryParams.get('sort_by') || '',
        type: queryParams.get('type') || 'tv',
        with_genres: queryParams.get('with_genres') || '',
        with_origin_country: queryParams.get('with_origin_country') || '',
        primary_release_year: queryParams.get('primary_release_year') || '',
        first_air_date_year: queryParams.get('first_air_date_year') || '',
    };

    // Hàm áp dụng bộ lọc
    const applyFilters = (filters) => {
        const updatedFilters = { ...filters };

        // Xử lý loại phim và tham số năm
        if (updatedFilters.type === 'movie') {
            updatedFilters.primary_release_year = updatedFilters.first_air_date_year;
            delete updatedFilters.first_air_date_year;
        } else if (updatedFilters.type === 'tv') {
            updatedFilters.first_air_date_year = updatedFilters.primary_release_year;
            delete updatedFilters.primary_release_year;
        }

        // Tạo query string và điều hướng
        const queryParams = new URLSearchParams(updatedFilters).toString();
        navigate(`/filter-results?${queryParams}`);
    };

    return { filterParams, applyFilters };
};
