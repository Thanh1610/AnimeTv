import MovieListSmall from '@/layouts/components/MovieListSmall';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-regular-svg-icons';
import { toast } from 'react-toastify';

import * as animationTvServices from '@/apiServices/animationTvServices';
import * as animationMovieServices from '@/apiServices/animationMovieServices';

function AccountSetting({ title, update }) {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const [name, setName] = useState(storedUser.name || '');
    const [password, setPassWord] = useState(storedUser.password || '');
    const [confirmPassword, setConfirmPassword] = useState(storedUser.password || '');
    const [showPassWord, setShowPassWord] = useState(false);
    const [showConfirmPassWord, setShowConfirmPassWord] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedUser = { ...storedUser };

        if (update) {
            updatedUser.name = name;
        } else {
            if (password !== confirmPassword) {
                toast.error('Mật khẩu không khớp!');
                return;
            }
            updatedUser.password = password;
        }

        localStorage.setItem('user', JSON.stringify(updatedUser));
        toast.success(update ? 'Cập nhật thành công!' : 'Đổi mật khẩu thành công!');
        window.location.reload();
    };

    const handleChangePassword = (e) => {
        if (update) {
            setName(e.target.value);
        }
        setPassWord(e.target.value);
    };

    const inputStyles =
        'box-shadow h-[34px] w-full rounded-[4px] border-1 border-[#ccc] bg-white px-3 py-1.5 text-[14px] text-[#555]';
    return (
        <div className="bg-[#151d25]">
            <div className="flex flex-col lg:flex-row">
                <div className="w-full px-3.5 pt-2.5 pb-5 lg:w-[70%]">
                    <h3 className="mt-5 mb-2.5 text-2xl leading-[1.1]">{title}</h3>

                    <form onSubmit={handleSubmit} className="items-left flex flex-col">
                        <label htmlFor="input1" className="mb-[5px] font-bold">
                            {update ? 'Tên' : 'Mật Khẩu'}
                        </label>
                        <div className="relative">
                            <input
                                type={update ? 'text' : showPassWord ? 'text' : 'password'}
                                required
                                id="input1"
                                value={update ? name : password}
                                className={inputStyles}
                                onChange={handleChangePassword}
                            />
                            <div
                                className="absolute top-[50%] right-2.5 -translate-y-1/2"
                                onMouseDown={() => setShowPassWord(true)}
                                onMouseUp={() => setShowPassWord(false)}
                            >
                                {showPassWord ? (
                                    <FontAwesomeIcon icon={faEye} className="text-black" />
                                ) : (
                                    <FontAwesomeIcon icon={faEyeSlash} className="text-black" />
                                )}
                            </div>
                        </div>

                        <label className="mt-2.5" htmlFor="input2">
                            {update ? 'email' : 'Nhập lại mật khẩu mới'}
                        </label>
                        <div className="relative">
                            <input
                                type={update ? 'email' : showConfirmPassWord ? 'text' : 'password'}
                                required
                                id="input2"
                                value={update ? storedUser.email : confirmPassword}
                                className={inputStyles}
                                disabled={update}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            <div
                                className="absolute top-[50%] right-2.5 -translate-y-1/2"
                                onMouseDown={() => setShowConfirmPassWord(true)}
                                onMouseUp={() => setShowConfirmPassWord(false)}
                            >
                                {showConfirmPassWord ? (
                                    <FontAwesomeIcon icon={faEye} className="text-black" />
                                ) : (
                                    <FontAwesomeIcon icon={faEyeSlash} className="text-black" />
                                )}
                            </div>
                        </div>

                        <div className="mt-5 flex items-center justify-center">
                            <button className="btn-danger rounded-[4px] px-3 py-1.5 text-white" type="submit">
                                {update ? 'Lưu Lại' : ' Đổi Mật Khẩu '}
                            </button>
                        </div>
                    </form>
                </div>

                <div className="w-full lg:w-[30%]">
                    <MovieListSmall
                        title="Hoạt Hình Bộ AnimeTv"
                        fetchMovies={animationTvServices.animationTv}
                        limit={5}
                    />

                    <MovieListSmall
                        title="Hoạt Hình Lẻ AnimeTv"
                        fetchMovies={animationMovieServices.animationMovie}
                        limit={5}
                    />
                </div>
            </div>
        </div>
    );
}

export default AccountSetting;
