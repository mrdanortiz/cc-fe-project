import { createContext } from "react";
import { InitialState } from './initialState';

type AppContextInterface = {
    state: InitialState;
    dispatch: ({ type, data }: { type: string, data?: any }) => void;
}

export const AppContext = createContext({} as AppContextInterface);
