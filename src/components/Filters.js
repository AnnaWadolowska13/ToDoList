import React from "react";
import { useDispatch } from "react-redux";
import { showFilter } from "./toDoListSlice"

function Filters(){
    const dispatch = useDispatch();

    const onSelectChange = event => dispatch(showFilter(event.target.value));

    return (
        <div className="mb-2">
            <label htmlFor="selectFilter"> Show: </label>
            <select 
                id="selectFilter" 
                onChange={onSelectChange} 
                className="border rounded p-1 mb-2 dark:bg-slate-500">
                    
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
    )
}

export default Filters;