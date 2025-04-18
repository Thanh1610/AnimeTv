import clsx from 'clsx';
function Wrapper({ children }) {
    return (
        <>
            <div
                className={clsx(
                    'p-3.5] border-[rgba(0, 0, 0, 0.2] box-shadow rounded-[.5rem] border-1 bg-[#f7f7f7]',
                    'z-[1000] flex flex-col items-center justify-center',
                    'min-h-5 w-full max-w-[17.25rem]',
                )}
            >
                {children}
            </div>
            {/* <div className="arrow" data-popper-arrow></div> */}
        </>
    );
}

export default Wrapper;
