/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent, useCallback, useEffect, useState } from "react";

import parallaxABI from "./../../abi/parallaxABI.json";

import { useSigner } from "wagmi";

import Container from "../../components/Container/Container";
import { ethers, BigNumber } from "ethers";
import { convertHexToDecimal } from "../../utils/convertHexToDecimal";

const Mint = () => {
	const [totalSupply, setTotalSupply] = useState<number>(0);
	const [mintAmount, setMintAmount] = useState<string>("");

	const { data: signer } = useSigner();

	const mintAction = async () => {
		const parallaxContract = new ethers.Contract(
			"0xe63434289AB72602f4b446e00e716206c9A9B97a",
			parallaxABI,
			signer!
		);

		const decimalValue = ethers.utils.parseUnits(mintAmount, 18); // Convert mintAmount to decimal value

		const mint = await parallaxContract.safeMint(
			BigNumber.from(mintAmount),
			Number(mintAmount)
		);

		const mintReceipt = await mint.wait();
		console.log(mintReceipt);
	};

	const fetchTotalSupply = useCallback(async () => {
		const parallaxContract = new ethers.Contract(
			"0xe63434289AB72602f4b446e00e716206c9A9B97a",
			parallaxABI,
			signer!
		);

		const totalSupply = await parallaxContract.totalSupply();
		setTotalSupply(convertHexToDecimal(totalSupply._hex));
	}, []);

	useEffect(() => {
		fetchTotalSupply();
	}, [fetchTotalSupply]);

	return (
		<div className='py-5'>
			<Container className='mt-32 flex justify-center'>
				<div className='flex w-full flex-col sm:w-1/2 sm:flex-row'>
					<input
						value={mintAmount}
						onChange={(e: ChangeEvent) =>
							setMintAmount((e.target as HTMLInputElement).value)
						}
						type='text'
						placeholder='Mint amount'
						className='w-full rounded-none border border-gray-700 bg-black px-3 py-2.5 text-white outline-none placeholder:translate-y-[2px] sm:rounded-l-md'
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
