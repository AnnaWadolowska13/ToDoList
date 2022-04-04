import React, { MouseEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showFilter } from "../slices/filtersSlice"

import { VISIBILITY_FILTERS } from "../constants";
import { AppDispatch, RootState } from "../store";

function Filters(){
    const dispatch = useDispatch<AppDispatch>();
    const activeFilter = useSelector((state:RootState) => state.filters.show);
    const handleFiltrChange = (filter:string) =>  dispatch(showFilter(filter));
    

    return (
        <div className="mb-2">
            <span> Show: </span>
            {Object.values(VISIBILITY_FILTERS).map((filter) => 
                <button 
                    key={filter} 
                    value={filter}
                    className={`${activeFilter===filter? "border-gray-100 border-b-2 my-0 cursor-default" : "hover:my-0 hover:border-b-2 hover:border-gray-700 cursor-pointer"} mx-2 my-2 `}
                    onClick={() => handleFiltrChange(filter)}
                > 
                    {filter.charAt(0).toUpperCase() + filter.slice(1)} 
                </button>) 
            }

        </div>
    )
}

export default Filters;

// mx-2 my-1 hover:my-0 hover:border-b-2 hover:border-gray-700 cursor-pointer "