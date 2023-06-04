import Container from "../Container/Container";
import CustomConnectButton from "../CustomConnectButton/CustomConnectButton";

const NotConnected = () => {
	return (
		<Container className='pt-32'>
			<div className='flex w-full flex-col items-center justify-center'>
				<div className='text-center text-2xl font-semibold'>
					Connect to your wallet
				</div>
				<div className='mt-5'>
					<CustomConnectButton />
				</div>
			</div>
		</Container>
	);
};

export default NotConnected;
