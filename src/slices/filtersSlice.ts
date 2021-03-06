import { createSlice } from "@reduxjs/toolkit";

import { VISIBILITY_FILTERS } from "../constants";

const initialState = {
    columns: "1",
    show: VISIBILITY_FILTERS.ALL
}

const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers:{
        viewChanger: (state, action) =>{
            state.columns = action.payload;
        },
        showFilter:(state, action) => {
            state.show = action.payload;
        },
        resetFilters:(state) => {
            state.columns = initialState.columns;
            state.show = initialState.show;

        }
    }
})

export const { viewChanger, showFilter, resetFilters} = filtersSlice.actions;

export default filtersSlice.reducer;