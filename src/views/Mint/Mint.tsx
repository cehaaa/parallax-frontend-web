/* eslint-disable @typescript-eslint/no-unused-vars */

import { useEffect, useState } from "react";
import type { ChangeEvent } from "react";

import {
	useAccount,
	useContractRead,
	usePrepareContractWrite,
	useContractWrite,
} from "wagmi";

import parallaxABI from "./../../abi/parallaxABI.json";

import Container from "../../components/Container/Container";
import NotConnected from "../../components/NotConnected/NotConnected";
import { parseEther } from "viem";

const Mint = () => {
	const { isConnected } = useAccount();

	const [mintAmount, setMintAmount] = useState<string>("1");

	const contractConfig = {
		address: import.meta.env.VITE_PARALLAX_NETWORK_CONTRACT_ADDRESS,
		abi: parallaxABI,
	};

	const { data: totalSupply } = useContractRead({
		...contractConfig,
		functionName: "totalSupply",
		watch: true,
	});

	const { config: mintConfig } = usePrepareContractWrite({
		...contractConfig,
		functionName: "safeMint",
		args: [Number(mintAmount)],
		value: parseEther(`${Number(mintAmount) * 0.001}`) as any,
	});

	const {
		write: writeAction,
		isLoading: isMintLoading,
		isSuccess: isMintSuccess,
	} = useContractWrite(mintConfig);

	const mintAction = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (writeAction) writeAction();
	};

	if (!isConnected) return <NotConnected />;

	return (
		<Container className='pt-32'>
			<div className='grid grid-cols-1 gap-y-3 sm:grid-cols-2 sm:gap-x-8 '>
				<div className=' bg-secondary p-5'>
					<div className='text-base font-medium sm:text-lg'>Public Minted</div>
					<div className='mt-2 text-2xl font-semibold  text-custom-gray sm:text-4xl'>
						{`${Number(totalSupply)}`}
					</div>
				</div>
				<div className=' bg-secondary p-5'>
					<div className='text-base font-medium sm:text-lg'>Total Supply</div>
					<div className='mt-2 text-2xl font-semibold  text-custom-gray sm:text-4xl'>
						{`${Number(totalSupply)}`}
					</div>
				</div>
			</div>

			<div className='mt-5 flex flex-col sm:flex-row'>
				<form onSubmit={e => mintAction(e)}>
					<input
						min={1}
						value={mintAmount}
						onChange={(e: ChangeEvent) =>
							setMintAmount((e.target as HTMLInputElement).value)
						}
						type='number'
						placeholder='Mint amount'
						className='w-full rounded-none border border-gray-700 bg-black px-3 py-2.5 text-white outline-none placeholder:translate-y-[2px] sm:w-[500px] sm:rounded-l-md'
					/>
					<button className='mt-5 w-full bg-primary py-2.5 font-semibold text-black duration-200 sm:mt-0 sm:w-[200px]'>
						<div className='mt-1'>{isMintLoading ? "Loading..." : "Mint"}</div>
					</button>
				</form>
			</div>

			<>
				{isMintSuccess && (
					<div className='mt-3 text-green-500'>Mint success</div>
				)}
			</>
		</Container>
	);
};

export default Mint;
