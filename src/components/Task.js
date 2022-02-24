import React from 'react'
import { useDispatch } from 'react-redux'
import { taskCompleted } from './toDoListSlice'

function Task({task}){
    const dispatch = useDispatch();

    const onClickCompleted = event =>{
        // console.log(event.target);
        let value = event.target.value;
        dispatch(taskCompleted(value));
    }

    return (
        <li className={task.completed 
        ? "bg-green-400 dark:bg-green-800 p-1 pr-8 rounded relative mb-1 min-w-full" 
        : "bg-slate-200 dark:bg-gray-700 p-1 pr-8 rounded relative mb-1 min-w-full"}>
            {task.title}
            <input value={task.id} className="absolute right-2 top-1/3" type="checkbox" checked={task.completed} onChange={onClickCompleted}/>
        </li>
    )
}

export default Task;