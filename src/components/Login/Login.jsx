/* eslint-disable no-unused-vars */
import { useState } from 'react';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import { AnimatePresence, motion } from 'motion/react';

function Login({ onClose, onLoginSuccess }) {
    const [changeForm, setChangeForm] = useState(false);

    const handleOverlayClick = () => {
        handleClose();
    };

    const handleChangeFrom = () => {
        setChangeForm((prev) => !prev);
    };

    const handleClose = () => {
        onClose();
    };

    return (
        <AnimatePresence>
            <div
                className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center bg-black/30"
                onClick={handleOverlayClick}
            >
                <motion.div
                    initial={{ opacity: 0, scaleY: 0.95 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    exit={{ opacity: 0, scaleY: 0.95 }}
                    transition={{ duration: 0.3 }}
                    style={{ transformOrigin: 'top' }}
                    className="mx-auto w-full max-w-[37.5rem]"
                    onClick={(e) => e.stopPropagation()}
                >
                    {!changeForm ? (
                        <LoginForm
                            onClose={handleClose}
                            onLoginSuccess={onLoginSuccess}
                            changeForm={handleChangeFrom}
                        />
                    ) : (
                        <RegisterForm
                            onClose={handleClose}
                            onLoginSuccess={onLoginSuccess}
                            changeForm={handleChangeFrom}
                        />
                    )}
                </motion.div>
            </div>
        </AnimatePresence>
    );
}

export default Login;
