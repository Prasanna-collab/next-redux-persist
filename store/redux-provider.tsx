import React from 'react';
import { Provider } from 'react-redux';
import { store } from "./index";
//persist config
import { persistStore } from "redux-persist";

persistStore(store);

const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
    return <Provider store={store}>{children}</Provider>
}

export default ReduxProvider;