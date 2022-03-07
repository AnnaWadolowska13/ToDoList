import React from "react";
import { useDispatch } from "react-redux";

import {viewChanger} from "../slices/filtersSlice"

function ViewChanger(){
    const dispatch = useDispatch();

    const handleSelectChange = e => dispatch(viewChanger(e.target.value));
    return(
        <section>
            <label htmlFor="viewChanger">Change view to:</label>
            <select 
                name="viewChanger" 
                id="viewChanger" 
                onChange={handleSelectChange}
                className="border rounded p-1 mb-2 dark:bg-slate-500 ml-2">
                <option value="1">one column</option>
                <option value="2">two columns</option>
            </select>
        </section>
    )
}

export default ViewChanger;