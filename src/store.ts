import { configureStore, Store } from "@reduxjs/toolkit";
import toDoListReducer from "./slices/toDoListSlice";
import filtersSlice from "./slices/filtersSlice";

export const store:Store = configureStore({
    reducer:{
        toDoList: toDoListReducer,
        filters: filtersSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;