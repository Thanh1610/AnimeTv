import { Logo } from '@/components/icons';
import { Link } from 'react-router';
import config from '@/config';

function Footer() {
    return (
        <div className="my-5 border-t-[4px] border-[#0e1215] bg-[#101720]">
            <div className="content">
                <div className="w-[33.3333%] bg-[#0e1215] p-5 pt-2.5">
                    <div className="border-b-1 border-[#1e262d] px-5 py-3.5">
                        <Logo />
                    </div>
                    <p className="py-3.5">
                        <Link to={config.routes.home} className="text-[#f0f8ff]">
                            MoviX.vn
                        </Link>{' '}
                        - Website xem phim trực tuyến chất lượng cao
                        <br />
                        Phim Moi | Phim Hay | Xem Phim Online | Phim China | Phim Bộ Trung Quốc
                        <br />
                        Contact:{' '}
                        <Link to={config.routes.home} className="text-[#f0f8ff]">
                            Call Now
                        </Link>
                        <br />
                        <Link to={config.routes.home} className="text-[#f0f8ff]">
                            Giới thiệu
                        </Link>
                        <br />
                        <Link to={config.routes.home} className="text-[#f0f8ff]">
                            Chính sách bảo mật
                        </Link>
                        <br />
                        <Link to={config.routes.home} className="text-[#f0f8ff]">
                            Quyền riêng tư
                        </Link>
                        <br />
                        <Link to={config.routes.home} className="text-[#f0f8ff]">
                            Điều khoản
                        </Link>
                        <br />
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
