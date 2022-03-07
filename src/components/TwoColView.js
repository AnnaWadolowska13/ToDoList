import React from "react";
import { useSelector } from "react-redux";

import TaskList from "./TaskList";

function TwoColView(){
    const user = useSelector((state) => (state.toDoList.user));
    const taskList = useSelector((state) => state.toDoList.toDoList.filter((task) => task.userId.toString() === user ))
    const completedTaskList = taskList.filter((task) => task.completed === true);
    const unCompletedTaskList = taskList.filter((task) => task.completed === false);
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