import React from "react";

import Filters from "./Filters";
import AddNewTask from "./AddNewTask";
import ViewChanger from "./ViewChanger";
import AddNewTaskButton from "./AddNewTaskButton";

function Nav(){
    return(
        <nav className="pt-2 pr-16 sticky top-0 z-10 bg-slate-50 dark:bg-gray-500">
            <ViewChanger/>
            <Filters/>
            <AddNewTask/>
            <AddNewTaskButton />
        </nav>
    )
}

export default Nav;