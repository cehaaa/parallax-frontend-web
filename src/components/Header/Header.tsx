import { useState } from "react";

import { useLocation } from "react-router-dom";

import { Link } from "react-router-dom";

import Container from "../Container/Container";
import CustomConnectButton from "../CustomConnectButton/CustomConnectButton";
import Sidebar from "../Sidebar/Sidebar";

const Header = () => {
	const location = useLocation();

	const [isShowSidebar, setIsShowSidebar] = useState<boolean>(false);

	return (
		<header className='border-b border-neutral-800 py-5'>
			<Container className='grid grid-cols-3 items-center'>
				<div>
					<Link to='/' className='text-lg font-bold sm:text-xl'>
						ParallaxNetwork
					</Link>
				</div>

				<nav className='text hidden space-x-8 justify-self-center font-medium sm:block'>
					<Link
						to='/'
						className={
							location.pathname === "/" ? "text-primary" : "text-white"
						}>
						Welcome
					</Link>
					<Link
						className={
							location.pathname === "/wallet" ? "text-primary" : "text-white"
						}
						to='/wallet'>
						Wallet
					</Link>
					<Link
						className={
							location.pathname === "/mint" ? "text-primary" : "text-white"
						}
						to='/mint'>
						Mint
					</Link>
				</nav>

				<div className='col-span-2 hidden justify-self-end sm:col-span-1 sm:block'>
					<CustomConnectButton />
				</div>

				<button
					className='col-span-2 block justify-self-end sm:hidden'
					onClick={() => setIsShowSidebar(true)}>
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
							d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
						/>
					</svg>
				</button>
			</Container>

			{isShowSidebar && <Sidebar setIsShowSidebar={setIsShowSidebar} />}
		</header>
	);
};

export default Header;
