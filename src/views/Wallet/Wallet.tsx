import { useAccount, useBalance } from "wagmi";

import Container from "../../components/Container/Container";
import DisconnectButton from "../../components/DisconnectButton/DisconnectButton";
import NotConnected from "../../components/NotConnected/NotConnected";

const Wallet = () => {
	const { address, isConnected } = useAccount();

	const { data, isLoading } = useBalance({
		address,
	});

	const copyAddress = (address: string) => {
		navigator.clipboard.writeText(address);
	};

	if (!isConnected) return <NotConnected />;

	return (
		<>
			<Container className='flex justify-center pt-32'>
				<div className='flex w-full justify-center'>
					<div className='w-full space-y-5 bg-secondary p-4 sm:w-[500px] sm:p-5'>
						<div className='break-words'>
							<div className='text-xl font-semibold sm:text-base'>
								Account Address
							</div>
							<div className='mt-1 flex items-center justify-between '>
								<div className='font-medium text-custom-gray sm:text-base'>
									{address}
								</div>
								<div
									className='border- cursor-pointer rounded-md p-1 text-custom-gray duration-200 hover:bg-primary hover:text-black'
									onClick={() => copyAddress(address!)}>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										strokeWidth={1.5}
										stroke='currentColor'
										className='h-5 w-5 '>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184'
										/>
									</svg>
								</div>
							</div>
						</div>

						<div>
							<div className='text-xl font-semibold sm:text-base'>Balance</div>

							<div className='mt-1 text-2xl sm:text-4xl'>
								<span>
									{isLoading ? (
										"Loading..."
									) : (
										<span className='font-medium text-custom-gray'>
											{data?.formatted.toString().slice(0, 6)} {data?.symbol}
										</span>
									)}
								</span>
							</div>
						</div>

						<div>
							<DisconnectButton />
						</div>
					</div>
				</div>
			</Container>
		</>
	);
};

export default Wallet;
