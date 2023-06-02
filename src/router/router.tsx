import { createBrowserRouter } from "react-router-dom";

import { Layout } from "../components/Layout";

import Home from "../views/Home/Home";
import Wallet from "../views/Wallet/Wallet";
import Mint from "../views/Mint/Mint";

const router = createBrowserRouter([
	{
		path: "/",
		Component: Layout,
		children: [
			{
				path: "/",
				Component: Home,
			},
			{
				path: "wallet",
				Component: Wallet,
			},
			{
				path: "mint",
				Component: Mint,
			},
		],
	},
]);

export default router;
