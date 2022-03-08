import React from "react";

import Filters from "./Filters";
import AddNewTask from "./AddNewTask";
import ViewChanger from "./ViewChanger";
import { useSelector } from "react-redux";

function Nav(){
    const col = useSelector(state => state.filters.columns);
    return(
        <nav className="pt-2 pr-16 sticky top-0 z-10 bg-slate-50 dark:bg-gray-500">
            <ViewChanger/>
            {col === "1" &&  <Filters/>}
            <AddNewTask/>
        </nav>
    )
}

export default Nav;