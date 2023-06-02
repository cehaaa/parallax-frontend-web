/* eslint-disable @typescript-eslint/no-empty-function */

import { Dispatch, SetStateAction, createContext } from "react";

export type AppContextProps = {
	connected: boolean;
	setConnected: Dispatch<SetStateAction<boolean>>;
};

export const AppContext = createContext<AppContextProps>({
	connected: false,
	setConnected: () => {},
});
