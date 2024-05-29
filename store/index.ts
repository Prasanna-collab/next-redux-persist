import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./authSlice";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
//persist config
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const authPersistConfig = {
    key:"auth",
    storage,
    whitelist: ["authState"],
    //in whitelist => which part of the state sud inside the whitelist.

};

const rootReducer = combineReducers({
    auth: persistReducer(authPersistConfig, authReducer)
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware({serializableCheck:false})
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;