import React from "react";

import Filters from "./Filters";
import AddNewTask from "./AddNewTask";

function Nav(){
    return(
        <nav className="pr-16">
            <Filters/>
            <AddNewTask/>
        </nav>
    )
}

export default Nav;