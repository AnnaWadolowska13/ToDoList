import React from "react";
import { useSelector } from "react-redux";

import TaskList from "./TaskList"

import { VISIBILITY_FILTERS } from "../constants";
import { RootState } from "../store";
import { TaskType } from "../slices/toDoListSlice";

function OneColumnView(){
    const user = useSelector((state:RootState) => (state.toDoList.user));
    const list = useSelector((state:RootState) => state.toDoList.toDoList.filter((task:TaskType) => task.userId.toString() === user ))
    const filter = useSelector((state:RootState) => state.filters.show);

    const filteredList = list.filter( (task:TaskType) => {
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