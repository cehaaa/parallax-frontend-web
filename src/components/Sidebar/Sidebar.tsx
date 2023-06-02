import React, { Dispatch, SetStateAction } from "react";

import { useLocation, useNavigate } from "react-router-dom";

type SidebarProps = {
	setIsShowSidebar: Dispatch<SetStateAction<boolean>>;
};

const Sidebar: React.FC<SidebarProps> = ({ setIsShowSidebar }) => {
	const location = useLocation();
	const navigate = useNavigate();

	const activeLink = (path: string) => {
		navigate(path);
		setIsShowSidebar(false);
	};

	return (
		<div className='fixed left-0 top-0 z-[999] flex min-h-screen w-full flex-col space-y-3 bg-black p-5 text-left text-2xl text-white'>
			<div className='flex w-full items-center justify-between'>
				<button
					className={`${
						location.pathname === "/" ? "text-primary" : "text-white"
					} text-left`}
					onClick={() => activeLink("/")}>
					Welcome
				</button>

				<button onClick={() => setIsShowSidebar(false)}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='h-6 w-6'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M6 18L18 6M6 6l12 12'
						/>
					</svg>
				</button>
			</div>
			<button
				className={`${
					location.pathname === "/wallet" ? "text-primary" : "text-white"
				} text-left`}
				onClick={() => activeLink("/wallet")}>
				Wallet
			</button>
			<button
				className={`${
					location.pathname === "/mint" ? "text-primary" : "text-white"
				} text-left`}
				onClick={() => activeLink("/mint")}>
				Mint
			</button>
		</div>
	);
};

export default Sidebar;
