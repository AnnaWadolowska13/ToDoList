import { configureStore } from "@reduxjs/toolkit";
import toDoListReducer from "./components/toDoListSlice";
import filtersSlice from "./slices/filtersSlice";

export default configureStore({
    reducer:{
        toDoList: toDoListReducer,
        filters: filtersSlice
    }
})