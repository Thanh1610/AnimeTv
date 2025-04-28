/* eslint-disable no-unused-vars */
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

function RegisterForm({ changeForm, onClose, onLoginSuccess }) {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const password = watch('password');

    const onSubmit = (data) => {
        if (data.password !== data.confirmPassword) {
            toast.error('Mật khẩu không khớp!');
            return;
        }
        const user = { name: data.name, email: data.email, password: data.password };
        localStorage.setItem('user', JSON.stringify(user));
        toast.success('Đăng kí thành công !');
        // onLoginSuccess(user); // đăng nhập luôn sau khi đăng kí thành công
        onClose();
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
                <p>Đăng Ký</p>
                <div className="cursor-pointer text-[1.3125rem] font-black hover:text-white" onClick={onClose}>
                    &times;
                </div>
            </div>

            {/* body */}
            <div className="p-3.5">
                <div className="mb-3.5">
                    <label className={lablelStyles} htmlFor="name">
                        Tên :
                    </label>
                    <input
                        id="name"
                        type="text"
                        className={inputStyles}
                        {...register('name', { required: 'Vui lòng nhập tên' })}
                    />
                    {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
                </div>

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
                    {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
                </div>

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
                    {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
                </div>

                <div className="mb-3.5">
                    <label className={lablelStyles} htmlFor="confirmPassword">
                        Nhập lại mật khẩu:
                    </label>
                    <input
                        id="confirmPassword"
                        type="password"
                        className={inputStyles}
                        {...register('confirmPassword', {
                            required: 'Vui lòng nhập lại mật khẩu',
                            validate: (value) => value === password || 'Mật khẩu không khớp',
                        })}
                    />
                    {errors.confirmPassword && <p className="text-sm text-red-500">{errors.confirmPassword.message}</p>}
                </div>

                <div className="mb-3.5 flex items-center gap-3">
                    <div className={lablelStyles}>Bạn đã có tài khoản?</div>
                    <div className="cursor-pointer text-[#87c3f9] hover:text-[#23527c]" onClick={changeForm}>
                        Đăng nhập ngay?
                    </div>
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
                    Đăng ký
                </button>
            </div>
        </form>
    );
}

export default RegisterForm;
