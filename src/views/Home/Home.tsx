import { Link } from "react-router-dom";

import Container from "../../components/Container/Container";
import CustomConnectButton from "../../components/CustomConnectButton/CustomConnectButton";

const Home = () => {
	return (
		<div className='flex grow flex-col justify-between py-5'>
			<Container className='flex flex-col items-center justify-center'>
				<div className='mt-9 text-center text-3xl font-bold uppercase leading-snug sm:mt-32 sm:text-6xl'>
					the world of <br />
					<span className='inline-block bg-gradient-to-r from-blue-600 via-cyan-400 to-primary bg-clip-text font-black text-transparent sm:text-6xl'>
						super rare artwork
					</span>
				</div>

				<div className='mt-3 text-center text-base text-gray-400 sm:w-[600px] sm:text-lg'>
					Welcome to the world of rare digital art. Explore the best art from
					hand-picked digital artist out there and find the hidden gem.
				</div>

				<div className='mt-5'>
					<CustomConnectButton />
				</div>
			</Container>

			<div className='border-t border-neutral-800 pt-5 sm:pt-0'>
				<Container className='grid w-full grid-cols-1 items-center sm:grid-cols-3'>
					<Link to='/mint'>
						<div className='order-2 col-span-2 mt-5 flex h-0 cursor-pointer items-center justify-center bg-primary py-5 text-base font-semibold text-black hover:underline sm:order-1 sm:col-span-1 sm:mt-0 sm:h-[180px] sm:w-[323px] sm:text-2xl '>
							<div className='mt-1'>Discover more</div>
						</div>
					</Link>

					<div className='order-1 col-span-1 grid grid-cols-2 gap-5 sm:order-2 sm:col-span-2 sm:grid-cols-4 sm:gap-0'>
						<div>
							<div className='text-2xl font-bold sm:text-5xl'>3.1 m</div>
							<div className='text-sm text-gray-400 sm:text-base'>
								Art stored
							</div>
						</div>

						<div>
							<div className='text-2xl font-bold sm:text-5xl'>250 k</div>
							<div className='text-sm text-gray-400 sm:text-base'>Rare Art</div>
						</div>

						<div>
							<div className='text-2xl font-bold sm:text-5xl'>148 k</div>
							<div className='text-sm text-gray-400 sm:text-base'>
								Professional Artists
							</div>
						</div>

						<div>
							<div className='text-2xl font-bold sm:text-5xl'>500 k</div>
							<div className='text-sm text-gray-400 sm:text-base'>
								Daily active users
							</div>
						</div>
					</div>
				</Container>
			</div>
		</div>
	);
};

export default Home;
