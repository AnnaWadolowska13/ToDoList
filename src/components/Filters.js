import React from "react";
import { useDispatch } from "react-redux";
import { showFilter } from "./toDoListSlice"

import { VISIBILITY_FILTERS } from "../constants";

function Filters(){
    const dispatch = useDispatch();

    const handleSelectChange = event => dispatch(showFilter(event.target.value));

    return (
        <div className="mb-2">
            <label htmlFor="selectFilter"> Show: </label>
            <select 
                id="selectFilter" 
                onChange={handleSelectChange} 
                className="border rounded p-1 mb-2 dark:bg-slate-500">
                {Object.values(VISIBILITY_FILTERS).map((filter) => <option key={filter} value={filter}> {filter} </option>) }
            </select>
        </div>
    )
}

export default Filters;