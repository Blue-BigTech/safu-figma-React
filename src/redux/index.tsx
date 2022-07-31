import { configureStore } from "@reduxjs/toolkit";

export const getStore = () => {
    const store = configureStore({
        reducer: {},
    });
    return store;
};

export type Store = ReturnType<typeof getStore>;
