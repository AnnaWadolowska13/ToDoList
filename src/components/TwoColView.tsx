import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { taskDragAndDrop, TaskType } from "../slices/toDoListSlice";
import { AppDispatch, RootState } from "../store";

import TaskList from "./TaskList";

function TwoColView(){
    const dispatch = useDispatch<AppDispatch>();
    const user = useSelector((state:RootState ) => (state.toDoList.user));
    const taskList = useSelector((state:RootState) => state.toDoList.toDoList.filter((task:TaskType) => task.userId.toString() === user ))
    const completedTaskList = taskList.filter((task:TaskType) => task.completed === true);
    const unCompletedTaskList = taskList.filter((task:TaskType) => task.completed === false);

    function onDragOver(ev:any){
        ev.preventDefault();
    }
    function onDrop(ev:any, actionType:string){
        let id = ev.dataTransfer.getData("id");
        dispatch(taskDragAndDrop({
            id: id.toString(),
            actionType: actionType
        }));

    }
    return(
        <div className="flex flex-row">
            <div 
                className="mr-1 w-1/2 uncompleted"
                onDragOver={(e)=>onDragOver(e)}
                onDrop={(e)=>{onDrop(e, "dragUnCompleted")}}
            >
                <h2 className="text-lg">Uncompleted Tasks:</h2>
                <TaskList taskList={unCompletedTaskList} />
            </div>
            <div  
                className="w-1/2 completed"
                onDragOver={(e)=>onDragOver(e)}
                onDrop={(e)=>{onDrop(e, "dragCompleted")}}
            >
                <h2>Completed Tasks:</h2>
                <TaskList taskList={completedTaskList}/>                
            </div>
        </div>
    )
}

export default TwoColView;