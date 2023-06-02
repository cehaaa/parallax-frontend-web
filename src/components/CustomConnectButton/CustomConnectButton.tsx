import { ConnectButton } from "@rainbow-me/rainbowkit";

const CustomConnectButton = () => {
	return (
		<ConnectButton.Custom>
			{({
				account,
				chain,
				openAccountModal,
				openConnectModal,
				authenticationStatus,
				mounted,
			}) => {
				const ready = mounted && authenticationStatus !== "loading";

				const connected =
					ready &&
					account &&
					chain &&
					(!authenticationStatus || authenticationStatus === "authenticated");

				return (
					<div
						{...(!ready && {
							"aria-hidden": true,
							style: {
								opacity: 0,
								pointerEvents: "none",
								userSelect: "none",
							},
						})}>
						{(() => {
							if (!connected) {
								return (
									<button
										onClick={openConnectModal}
										type='button'
										className='flex items-center justify-center border border-primary px-8 py-2.5  font-semibold duration-200 hover:bg-primary hover:text-black'>
										<div className='mt-1 tracking-wide'>Connect Wallet</div>
									</button>
								);
							}

							if (chain.unsupported) {
								return (
									<button
										onClick={openConnectModal}
										type='button'
										className='flex items-center justify-center border border-primary px-8 py-2.5  font-semibold duration-200 hover:bg-primary hover:text-black'>
										<div className='mt-1 tracking-wide'>Wrong network</div>
									</button>
								);
							}

							return (
								<button
									onClick={openAccountModal}
									className='flex items-center justify-center border border-primary px-8 py-2.5  font-semibold duration-200 hover:bg-primary hover:text-black'
									type='button'>
									<div className='mt-1 tracking-wide'>
										{account.displayName}
									</div>
								</button>
							);
						})()}
					</div>
				);
			}}
		</ConnectButton.Custom>
	);
};

export default CustomConnectButton;
