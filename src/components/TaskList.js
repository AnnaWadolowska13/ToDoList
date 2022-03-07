import React from "react";
import Task from "./Task";

function TaskList(props){
    function taskListMap(taskList){
        return taskList.map((task) => <Task key={task.id} task={task}/>)
    }
    return(
        <>
            {props.taskList.length ? <ul>{taskListMap(props.taskList)}</ul>  : <p> Empty List</p>}
        </>
        
    )
}

export default TaskList;