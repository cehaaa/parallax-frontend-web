import router from "../router/router";
import { RouterProvider } from "react-router-dom";

import { WagmiConfig } from "wagmi";
import { wagmiConfig } from "../lib/wagmiConfig";

const App = () => {
	return (
		<WagmiConfig config={wagmiConfig}>
			<RouterProvider router={router} />
		</WagmiConfig>
	);
};

export default App;
