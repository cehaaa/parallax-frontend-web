import { createConfig, configureChains, sepolia, mainnet } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { getDefaultWallets } from "@rainbow-me/rainbowkit";

export const { chains, publicClient, webSocketPublicClient } = configureChains(
	[sepolia, mainnet],
	[publicProvider()]
);

export const { connectors } = getDefaultWallets({
	appName: "ParallaxNetwork",
	chains,
});

export const wagmiConfig = createConfig({
	autoConnect: true,
	connectors,
	publicClient,
	webSocketPublicClient,
});
