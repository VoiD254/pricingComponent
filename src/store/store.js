import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../features/card/appSlice";

const store = configureStore({
    reducer: {
        app: appReducer
    }
});

export default store;
