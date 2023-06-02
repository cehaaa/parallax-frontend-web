import Container from "../../components/Container/Container";

const Home = () => {
	return (
		<div className='flex grow flex-col justify-between py-5'>
			<Container className='flex flex-col items-center justify-center'>
				<div className='mt-32 text-center text-6xl font-bold uppercase leading-snug'>
					the world of <br />
					<span className='inline-block bg-gradient-to-r from-blue-600 via-cyan-400 to-primary bg-clip-text text-5xl font-black text-transparent sm:text-6xl'>
						super rare artwork
					</span>
				</div>

				<div className='mt-3 w-[600px] text-center text-lg text-gray-400'>
					Welcome to the world of rare digital art. Explore the best art from
					hand-picked digital artist out there and find the hidden gem.
				</div>
			</Container>

			<div className='border-t border-neutral-800'>
				<Container className='flex items-center justify-between'>
					<div className='flex h-[180px] w-[323px] cursor-pointer items-center justify-center bg-primary text-2xl font-semibold text-black hover:underline'>
						Discover more
					</div>

					<div>
						<div className='text-5xl font-bold'>3.1 m</div>
						<div className='text-gray-400'>Art stored</div>
					</div>

					<div>
						<div className='text-5xl font-bold'>250 k</div>
						<div className='text-gray-400'>Rare Art</div>
					</div>

					<div>
						<div className='text-5xl font-bold'>148 k</div>
						<div className='text-gray-400'>Professional Artists</div>
					</div>

					<div>
						<div className='text-5xl font-bold'>500 k</div>
						<div className='text-gray-400'>Daily active users</div>
					</div>
				</Container>
			</div>
		</div>
	);
};

export default Home;
