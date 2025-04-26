import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
    // Lấy user từ localStorage khi load
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem('user');
        return storedUser ? JSON.parse(storedUser) : {};
    });

    // Đăng nhập hoặc đăng ký
    const login = (userData) => {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
    };

    // Đăng xuất
    const logout = () => {
        setUser({});
        localStorage.removeItem('user');
    };

    return <UserContext.Provider value={{ user, login, logout }}>{children}</UserContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const useUser = () => useContext(UserContext);
