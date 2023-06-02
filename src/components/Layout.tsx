// rainbow kit
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";

// wagmi
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { sepolia, mainnet } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

import { useState } from "react";

import { Outlet } from "react-router-dom";

import { AppContext } from "../context/AppContext";

import Header from "./Header/Header";

const { chains, publicClient } = configureChains(
	[sepolia, mainnet],
	[
		alchemyProvider({ apiKey: import.meta.env.VITE_ALCHEMY_KEY }),
		publicProvider(),
	]
);

const { connectors } = getDefaultWallets({
	appName: "ParallaxNetwork Frontend",
	chains,
});

const wagmiConfig = createConfig({
	autoConnect: true,
	connectors,
	publicClient,
});

export const Layout = () => {
	const [connected, setConnected] = useState<boolean>(false);

	const AppContextValue = {
		connected,
		setConnected,
	};

	return (
		<>
			<WagmiConfig config={wagmiConfig}>
				<RainbowKitProvider chains={chains}>
					<AppContext.Provider value={AppContextValue}>
						<div className='flex min-h-screen flex-col bg-black text-white'>
							<Header />

							<Outlet />
						</div>
					</AppContext.Provider>
				</RainbowKitProvider>
			</WagmiConfig>
		</>
	);
};

export default Layout;
