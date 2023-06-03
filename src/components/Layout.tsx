// rainbow kit
import "@rainbow-me/rainbowkit/styles.css";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";

import { useState } from "react";

import { Outlet } from "react-router-dom";

import { AppContext } from "../context/AppContext";

import Header from "./Header/Header";

import { chains } from "../lib/wagmiConfig";

export const Layout = () => {
	const [connected, setConnected] = useState<boolean>(false);

	const AppContextValue = {
		connected,
		setConnected,
	};

	return (
		<>
			<RainbowKitProvider chains={chains}>
				<AppContext.Provider value={AppContextValue}>
					<div className='flex min-h-screen flex-col bg-black text-white'>
						<Header />

						<Outlet />
					</div>
				</AppContext.Provider>
			</RainbowKitProvider>
		</>
	);
};

export default Layout;
