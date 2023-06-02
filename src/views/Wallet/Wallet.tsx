import { useCallback, useEffect, useState } from "react";

import { useAccount } from "wagmi";

import Container from "../../components/Container/Container";
import DisconnectButton from "../../components/DisconnectButton/DisconnectButton";

import { ethers } from "ethers";

const Wallet = () => {
	const { address, isConnected } = useAccount();

	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [userBalance, setUserBalance] = useState<number>(0);

	const fetchUserBalance = useCallback(async () => {
		try {
			setIsLoading(true);

			const provider = ethers.getDefaultProvider("sepolia");
			const balance = await provider.getBalance(address as string);

			setUserBalance(Number(balance));
		} catch (error) {
			console.error(error);
		} finally {
			setIsLoading(false);
		}
	}, [address]);

	useEffect(() => {
		fetchUserBalance();
	}, [fetchUserBalance]);

	return (
		<>
			<div className='py-5'>
				{isConnected ? (
					<Container className='mt-32'>
						<div className='flex w-full flex-col items-center space-y-5 '>
							<div className='text-base tracking-wide sm:text-lg'>
								{address}
							</div>

							<div>
								Balance:{" "}
								<span>
									{isLoading ? (
										"Loading..."
									) : (
										<span className='font-semibold'>
											{userBalance.toString().slice(0, 5)} ETH
										</span>
									)}
								</span>
							</div>

							<div>
								<DisconnectButton />
							</div>
						</div>
					</Container>
				) : (
					<Container>
						<div>Connect to your wallet</div>
					</Container>
				)}
			</div>
		</>
	);
};

export default Wallet;
