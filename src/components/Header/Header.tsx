import { useLocation } from "react-router-dom";

import { Link } from "react-router-dom";

import Container from "../Container/Container";
import CustomConnectButton from "../CustomConnectButton/CustomConnectButton";

const Header = () => {
	const location = useLocation();

	return (
		<header className='border-b border-neutral-800 py-5'>
			<Container className='grid grid-cols-3 items-center'>
				<div>
					<Link to='/' className='text-xl font-bold'>
						ParallaxNetwork
					</Link>
				</div>

				<nav className='text space-x-8 justify-self-center font-medium'>
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

				<div className='justify-self-end'>
					<CustomConnectButton />
				</div>
			</Container>
		</header>
	);
};

export default Header;
