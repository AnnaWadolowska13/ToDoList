import React from "react";
import { useSelector } from "react-redux";

import TaskList from "./TaskList"

import { VISIBILITY_FILTERS } from "../constants";

function OneColumnView(){
    const user = useSelector((state) => (state.toDoList.user));
    const list = useSelector((state) => state.toDoList.toDoList.filter((task) => task.userId.toString() === user ))
    const filter = useSelector((state) => state.filters.show);

    const filteredList = list.filter( (task) => {
        if(filter === VISIBILITY_FILTERS.COMPLETED){ 
            return task.completed === true
        }else if(filter === VISIBILITY_FILTERS.UNCOMPLETED){ 
            return task.completed === false
        }
        return true
    })

    return(
        <section>
            <TaskList taskList={filteredList} />
        </section>
        
    )
}

export default OneColumnView;