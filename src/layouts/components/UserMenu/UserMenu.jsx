import { Link, useNavigate } from 'react-router';
import config from '@/config';

function UserMenu() {
    const navigate = useNavigate();
    const handleLogOut = () => {
        localStorage.removeItem('user');
        alert('Đăng xuất thành công!');
        navigate(config.routes.home);
        window.location.reload();
    };
    const linkStyles = 'block px-[15px] py-[8px]  hover:text-[#6cbbff]';
    return (
        <ul className="box-shadow min-w-40 rounded-[4px] bg-[#1f3d58] py-[5px] text-[14px] text-white">
            <li>
                <Link to={config.routes.account} className={linkStyles}>
                    Tài khoản
                </Link>
            </li>
            <li>
                <Link to={config.routes.changePassword} className={linkStyles}>
                    Đổi mật khẩu
                </Link>
            </li>
            <li>
                <Link to={config.routes.home} className={linkStyles}>
                    Lịch sử xem
                </Link>
            </li>
            <li>
                <Link to={config.routes.home} className={linkStyles}>
                    Tủ phim
                </Link>
            </li>
            <li onClick={handleLogOut}>
                <button className={linkStyles}>Đăng xuất</button>
            </li>
        </ul>
    );
}

export default UserMenu;
