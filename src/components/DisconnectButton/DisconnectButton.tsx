import { disconnect } from "wagmi/actions";

const DisconnectButton = () => {
	return (
		<button
			onClick={() => disconnect()}
			className='border border-gray-500 px-8 py-2.5 font-semibold duration-200 hover:border-rose-600 hover:bg-rose-600'>
			<div className='mt-1'>Disconnect</div>
		</button>
	);
};

export default DisconnectButton;
