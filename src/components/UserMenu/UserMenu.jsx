import { Link, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import config from '@/config';
import { useUser } from '@/contexts/UserContext';

function UserMenu({ closeMenu }) {
    const { logout } = useUser();

    const navigate = useNavigate();

    const handleLogOut = () => {
        logout();
        toast.success('Đăng xuất thành công!');
        navigate(config.routes.home);
        closeMenu();
    };
    const linkStyles = 'block px-[15px] py-[8px]  hover:text-[#6cbbff]';

    const menuItems = [
        { label: 'Tài khoản', to: config.routes.account },
        { label: 'Đổi mật khẩu', to: config.routes.changePassword },
        { label: 'Lịch sử xem', to: config.routes.home },
        { label: 'Tủ phim', to: config.routes.home },
    ];
    return (
        <ul className="box-shadow min-w-40 rounded-[4px] bg-[#1f3d58] py-[5px] text-[14px] text-white">
            {menuItems.map((item, index) => (
                <li key={index}>
                    <Link to={item.to} className={linkStyles}>
                        {item.label}
                    </Link>
                </li>
            ))}
            <li onClick={handleLogOut}>
                <button className={linkStyles}>Đăng xuất</button>
            </li>
        </ul>
    );
}

export default UserMenu;
