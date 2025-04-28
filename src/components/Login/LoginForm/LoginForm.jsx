import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

function LoginForm({ changeForm, onClose, onLoginSuccess }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser && storedUser.email === data.email && storedUser.password === data.password) {
            toast.success('Đăng Nhập thành công !');
            onLoginSuccess(storedUser);
            onClose();
        } else {
            toast.error('Email hoặc mật khẩu không đúng!');
        }
    };

    const lablelStyles = `mb-1 inline-block max-w-full font-semibold`;
    const inputStyles = `w-full rounded-[0.25rem] border-1 border-[#66afe9] bg-white px-3 py-1.5 text-black`;
    return (
        <form
            className="box-shadow mx-auto my-4 min-h-14 w-full max-w-[37.5rem] bg-[#151d25] px-4 py-4 sm:px-6"
            onSubmit={handleSubmit(onSubmit)}
        >
            {/* header */}
            <div className="flex items-center justify-between border-b-1 border-[#e5e5e5] px-3.5 py-2">
                <p>Đăng Nhập</p>
                <div className="cursor-pointer text-[1.3125rem] font-black hover:text-white" onClick={onClose}>
                    &times;
                </div>
            </div>

            {/* body */}
            <div className="p-3.5">
                {/* email */}
                <div className="mb-3.5">
                    <label className={lablelStyles} htmlFor="email">
                        Email :
                    </label>
                    <input
                        id="email"
                        type="email"
                        className={inputStyles}
                        {...register('email', { required: 'Vui lòng nhập email' })}
                    />
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                </div>

                {/* password */}
                <div className="mb-3.5">
                    <label className={lablelStyles} htmlFor="password">
                        Mật khẩu :
                    </label>
                    <input
                        id="password"
                        type="password"
                        className={inputStyles}
                        {...register('password', { required: 'Vui lòng nhập mật khẩu' })}
                    />
                    {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                </div>

                {/* ghi nhớ đăng nhập */}
                <div className="mb-3.5 flex items-center gap-3">
                    <div className={lablelStyles}>Ghi nhớ đăng nhập :</div>
                    <input type="checkbox" />
                </div>

                {/* chuyển form đăng kí */}
                <div className="mb-3.5 flex items-center gap-3">
                    <div className={lablelStyles}>Bạn chưa có tài khoản?</div>
                    <div className="text-[#87c3f9] hover:text-[#23527c]" onClick={changeForm}>
                        Đăng ký ngay
                    </div>
                </div>

                {/* footer */}
                <div className="flex items-center justify-end gap-2 border-t-1 border-[#e5e5e5] p-3.5">
                    <button
                        onClick={onClose}
                        type="button"
                        className="btn hover:bg-text rounded-[0.25rem] bg-white text-black"
                    >
                        Đóng
                    </button>
                    <button type="submit" className="btn btn-danger w-[100px] rounded-[0.25rem] text-white">
                        Đăng nhập
                    </button>
                </div>
            </div>
        </form>
    );
}

export default LoginForm;
