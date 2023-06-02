import { ChangeEvent, useState } from "react";

import Container from "../../components/Container/Container";

const Mint = () => {
	const [mintAmount, setMintAmount] = useState<string>("");

	return (
		<div className='py-5'>
			<Container className='mt-32 flex justify-center'>
				<div className='flex w-1/2'>
					<input
						value={mintAmount}
						onChange={(e: ChangeEvent) =>
							setMintAmount((e.target as HTMLInputElement).value)
						}
						type='text'
						placeholder='Mint amount'
						className='w-full rounded-l-md border border-gray-700 bg-black px-3 py-2.5 text-white outline-none placeholder:translate-y-[2px]'
					/>
					<button className='w-[200px] bg-primary py-2.5 font-semibold text-black duration-200'>
						<div className='mt-1'>Mint</div>
					</button>
				</div>
			</Container>
		</div>
	);
};

export default Mint;
