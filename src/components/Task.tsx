import React from 'react';
import { useDispatch } from 'react-redux';
import { taskCompleted, taskDelete, TaskType} from '../slices/toDoListSlice';

import { RiCheckboxBlankLine, RiCheckboxLine } from "react-icons/ri";
import { BiTrashAlt } from "react-icons/bi";
import { AppDispatch } from '../store';

type TaskProp = {
    task: TaskType
}

function Task({task} :TaskProp){
    const dispatch = useDispatch<AppDispatch>();
    const handleClickCompleted = (id:string | number) => {
        dispatch(taskCompleted(id.toString()));
    }

    const handleClickTrash = (id:string | number) => {
        dispatch(taskDelete(id.toString()));
    }

    return (
        <li className={task.completed 
        ? "bg-green-400 dark:bg-green-800 p-1 pr-12 relative rounded mb-1" 
        : "bg-slate-200 dark:bg-gray-700 p-1 pr-12 relative rounded mb-1"}>
            {task.title}
            <div className='absolute right-1 top-1 text-xl'>
                <span onClick={() => handleClickTrash(task.id)} className='inline-block mr-1'> <BiTrashAlt/> </span>
                <span onClick={() => handleClickCompleted(task.id)} className='inline-block'> {task.completed ? <RiCheckboxLine/> : <RiCheckboxBlankLine/>} </span>
            </div>

        </li>
    )
} 

export default Task;