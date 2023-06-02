/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent, useCallback, useEffect, useState } from "react";

import parallaxABI from "./../../abi/parallaxABI.json";

import { useAccount, useSigner } from "wagmi";

import { ethers, BigNumber } from "ethers";
import { convertHexToDecimal } from "../../utils/convertHexToDecimal";

import Container from "../../components/Container/Container";
import NotConnected from "../../components/NotConnected/NotConnected";

const Mint = () => {
	const { isConnected } = useAccount();
	const [totalSupply, setTotalSupply] = useState<number>(0);
	const [mintAmount, setMintAmount] = useState<string>("");

	const { data: signer } = useSigner();

	const mintAction = async () => {
		const parallaxContract = new ethers.Contract(
			"0xe63434289AB72602f4b446e00e716206c9A9B97a",
			parallaxABI,
			signer!
		);

		// const decimalValue = ethers.utils.parseUnits(mintAmount, 18); // Convert mintAmount to decimal value

		const mint = await parallaxContract.safeMint(
			BigNumber.from(mintAmount),
			Number(mintAmount)
		);

		const mintReceipt = await mint.wait();
		console.log(mintReceipt);
	};

	const fetchTotalSupply = useCallback(async () => {
		const provider = ethers.getDefaultProvider("sepolia");

		const parallaxContract = new ethers.Contract(
			"0xe63434289AB72602f4b446e00e716206c9A9B97a",
			parallaxABI,
			provider
		);

		const totalSupply = await parallaxContract.totalSupply();

		setTotalSupply(convertHexToDecimal(totalSupply._hex));
	}, []);

	useEffect(() => {
		fetchTotalSupply();
	}, [fetchTotalSupply]);

	if (!isConnected) return <NotConnected />;

	return (
		<div className='py-5'>
			<Container>
				<div> Total supply: {totalSupply} </div>
				<div className='mt-5 flex'>
					<input
						value={mintAmount}
						onChange={(e: ChangeEvent) =>
							setMintAmount((e.target as HTMLInputElement).value)
						}
						type='text'
						placeholder='Mint amount'
						className='w-full rounded-none border border-gray-700 bg-black px-3 py-2.5 text-white outline-none placeholder:translate-y-[2px] sm:w-[500px] sm:rounded-l-md'
					/>
					<button
						className='mt-5 w-full bg-primary py-2.5 font-semibold text-black duration-200 sm:mt-0 sm:w-[200px]'
						onClick={() => mintAction()}>
						<div className='mt-1'>Mint</div>
					</button>
				</div>
			</Container>
		</div>
	);
};

export default Mint;
