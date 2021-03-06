import React from "react";
import { useDispatch } from "react-redux";

import {viewChanger} from "../slices/filtersSlice"
import { AppDispatch } from "../store";

function ViewChanger(){
    const dispatch = useDispatch<AppDispatch>();

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement> )=> dispatch(viewChanger(e.target.value));
    return(
        <section>
            <label htmlFor="viewChanger" className="block sm:inline">Change view to:</label>
            <select 
                name="viewChanger" 
                id="viewChanger" 
                onChange={handleSelectChange}
                className="border rounded p-1 mb-2 dark:bg-slate-500 sm:ml-2">
                <option value="1">one column</option>
                <option value="2">two columns</option>
            </select>
        </section>
    )
}

export default ViewChanger;