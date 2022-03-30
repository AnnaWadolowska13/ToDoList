import React from "react";
import { TaskType } from "../slices/toDoListSlice";
import Task from "./Task";

function TaskList(props:{taskList: Array<TaskType>}){
    function taskListMap(taskList:Array<TaskType>){
        return taskList.map((task: TaskType) => 
            <Task key={task.id} task={task}/>)
    }
    return(
        <>
            {props.taskList.length ? <ul>{taskListMap(props.taskList)}</ul>  : <p> Empty List</p>}
        </>
        
    )
}

export default TaskList;