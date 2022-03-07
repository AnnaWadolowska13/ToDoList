import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    columns: 1
}

const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers:{
        viewChanger: (state, action) =>{
            state.columns = action.payload;
        }
    }
})

export const {viewChanger} = filtersSlice.actions;

export default filtersSlice.reducer;