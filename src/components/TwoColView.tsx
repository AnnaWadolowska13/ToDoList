import React from "react";
import { useSelector } from "react-redux";
import { TaskType } from "../slices/toDoListSlice";
import { RootState } from "../store";

import TaskList from "./TaskList";

function TwoColView(){
    const user = useSelector((state:RootState ) => (state.toDoList.user));
    const taskList = useSelector((state:RootState) => state.toDoList.toDoList.filter((task:TaskType) => task.userId.toString() === user ))
    const completedTaskList = taskList.filter((task:TaskType) => task.completed === true);
    const unCompletedTaskList = taskList.filter((task:TaskType) => task.completed === false);
    return(
        <div className="flex flex-row">
            <div className="mr-1 w-1/2">
                <h2 className="text-lg">Uncompleted Tasks:</h2>
                <TaskList taskList={unCompletedTaskList}/>                
            </div>
            <div  className="w-1/2">
                <h2>Completed Tasks:</h2>
                <TaskList taskList={completedTaskList}/>                
            </div>

        </div>
    )
}

export default TwoColView;