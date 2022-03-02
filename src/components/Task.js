import React from 'react'
import { useDispatch } from 'react-redux'
import { taskCompleted, taskDelete } from './toDoListSlice'

import { RiCheckboxBlankLine, RiCheckboxLine } from "react-icons/ri"
import { BiTrashAlt } from "react-icons/bi"

function Task({task}){
    const dispatch = useDispatch();

    const onClickCompleted = event =>{
        // console.log(event.target);
        let value = event.currentTarget.parentNode.id;
        // console.log(event.currentTarget)
        dispatch(taskCompleted(value));
    }

    const onClickTrash = event => {
        let value = event.currentTarget.parentNode.id;
        dispatch(taskDelete(value));
    }

    return (
        <li className={task.completed 
        ? "bg-green-400 dark:bg-green-800 p-1 pr-12 relative rounded mb-1 " 
        : "bg-slate-200 dark:bg-gray-700 p-1 pr-12 relative rounded mb-1"}>
            {task.title}
            {/* <input value={task.id} className="absolute right-2 top-1/3" type="checkbox" checked={task.completed} onChange={onClickCompleted}/> */}
            <div className='absolute right-1 top-1 text-xl' id={task.id}>
                <span onClick={onClickTrash} className='inline-block'> <BiTrashAlt/> </span>
                {task.completed 
                    ? <span onClick={onClickCompleted} className='inline-block'><RiCheckboxLine/> </span>
                    : <span onClick={onClickCompleted} className='inline-block'> <RiCheckboxBlankLine/> </span>}            
            </div>

        </li>
    )
}

export default Task;