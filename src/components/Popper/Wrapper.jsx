import clsx from 'clsx';
function Wrapper({ children, className }) {
    return <div className={clsx({ className }, 'p-3.5] flex min-h-5 w-full rounded-[.5rem]')}>{children}</div>;
}

export default Wrapper;
