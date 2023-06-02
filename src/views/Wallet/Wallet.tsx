import { useCallback, useEffect, useState } from "react";

import { useAccount } from "wagmi";

import Container from "../../components/Container/Container";
import DisconnectButton from "../../components/DisconnectButton/DisconnectButton";

import { alchemy } from "../../lib/alchemy";
import { convertHexToDecimal } from "../../utils/convertHexToDecimal";

const Wallet = () => {
	const { address, isConnected } = useAccount();

	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [userBalance, setUserBalance] = useState<number>(0);

	const fetchUserBalance = useCallback(async () => {
		try {
			setIsLoading(true);
			const response = await alchemy.core.getBalance(
				address as string,
				"latest"
			);

			setUserBalance(convertHexToDecimal(response!._hex.slice(2)));
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
						<div className='flex w-full flex-col items-center space-y-5'>
							{/* <div className='h-52 w-52 rounded-full'></div> */}

							<div className='text-lg font-semibold tracking-wide'>
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
