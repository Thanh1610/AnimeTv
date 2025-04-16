import clsx from 'clsx';
import { useState } from 'react';

function Login({ onClose }) {
    const [isVisible, setIsVisible] = useState(true);
    const [registerOn, setRegisterOn] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleOverlayClick = () => {
        handleClose();
    };

    const handleModalClick = (e) => {
        e.stopPropagation();
    };

    const handleClose = () => {
        setIsVisible(false);
    };

    const handleAnimationEnd = () => {
        if (!isVisible) {
            onClose();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (registerOn) {
            if (password !== confirmPassword) {
                alert('Mật khẩu không khớp!');
                return;
            } else {
                alert('Đăng kí thành công !');
                handleClose();
            }
        } else {
            alert('Đăng nhập thành công!');
            handleClose();
        }
    };

    const lableStyles = `mb-1 inline-block max-w-full font-semibold`;
    const inputStyles = `w-full rounded-[0.25rem] border-1 border-[#66afe9]
     bg-[var(--white)] px-3 py-1.5 text-[var(--black)]`;
    return (
        <div className="fixed inset-0 bg-[var(--black)]/30" onClick={handleOverlayClick}>
            <form
                className={clsx(
                    'box-shadow mx-auto my-8 min-h-14 w-[37.5rem] bg-[#151d25]',
                    isVisible ? 'dropdown' : 'dropdown-hide',
                )}
                onClick={handleModalClick}
                onAnimationEnd={handleAnimationEnd}
                onSubmit={handleSubmit}
            >
                {/* header */}
                <div className="flex items-center justify-between border-b-1 border-[#e5e5e5] px-3.5 py-2">
                    <p>{registerOn ? 'Đăng Kí' : 'Đăng Nhập'}</p>
                    <div
                        className="cursor-pointer text-[1.3125rem] font-black hover:text-[var(--white)]"
                        onClick={handleClose}
                    >
                        &times;
                    </div>
                </div>

                {/* body */}
                <div className="p-3.5">
                    {registerOn && (
                        <div className="mb-3.5">
                            <label className={lableStyles} htmlFor="name">
                                Tên :
                            </label>
                            <input id="name" type="text" className={inputStyles} required />
                        </div>
                    )}
                    <div className="mb-3.5">
                        <label className={lableStyles} htmlFor="email">
                            Email :
                        </label>
                        <input id="email" type="email" className={inputStyles} required />
                    </div>

                    <div className="mb-3.5">
                        <label className={lableStyles} htmlFor="password">
                            Mật khẩu :
                        </label>
                        <input
                            id="password"
                            type="password"
                            className={inputStyles}
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {registerOn && (
                        <div className="mb-3.5">
                            <label className={lableStyles} htmlFor="password1">
                                Nhập lại mật khẩu: :
                            </label>
                            <input
                                id="password1"
                                type="password"
                                className={inputStyles}
                                required
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                    )}

                    {!registerOn && (
                        <div className="mb-3.5 flex items-center gap-3">
                            <div className={lableStyles}>Ghi nhớ đăng nhập :</div>
                            <input type="checkbox" />
                        </div>
                    )}

                    <div className="mb-3.5 flex items-center gap-3">
                        <div className={lableStyles}>
                            {registerOn ? 'Bạn đã có tài khoản?' : 'Bạn chưa có tài khoản?'}
                        </div>
                        <div
                            className="text-[#87c3f9] hover:text-[#23527c]"
                            onClick={() => setRegisterOn((prev) => !prev)}
                        >
                            {registerOn ? 'Đăng nhập ngay?' : 'Đăng ký ngay'}
                        </div>
                    </div>
                </div>

                {/* footer */}
                <div className="flex items-center justify-end gap-2 border-t-1 border-[#e5e5e5] p-3.5">
                    <button
                        onClick={handleClose}
                        type="button"
                        className="btn !rounded-[0.25rem] bg-[var(--white)] text-[var(--black)] hover:bg-[var(--text)]"
                    >
                        Đóng
                    </button>

                    <button
                        type="submit"
                        className={clsx(
                            'btn btn-danger w-[100px] !rounded-[0.25rem] text-[var(--white)]',
                            'bg-[linear-gradient(to_right,_#C02425_0%,_#F0CB35_51%,_#C02425_100%)]',
                        )}
                    >
                        {registerOn ? 'Đăng ký' : 'Đăng nhập'}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Login;
