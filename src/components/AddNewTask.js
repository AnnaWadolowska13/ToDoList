import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./toDoListSlice"

function AddNewTask(){

    const dispatch = useDispatch();

    const [modalDisplay, setModalDisplay] = useState(false);
    const [taskTitle, setTaskTitle] = useState("");

    const showModal = () => { setModalDisplay(modalDisplay => !modalDisplay)}

    const onTitleChange = e => setTaskTitle(e.target.value);
    const onExitClick = () => {
        setTaskTitle("");
        showModal();
    }
    const onStopPropagation = e => {
        //obsługuje i przycisk i klikniecie na zaciemnione tło
        e.preventDefault();
        e.stopPropagation();
    }
    const onAddButtonClick = () => {
        dispatch(addTask(taskTitle));
        setTaskTitle("");
        showModal();
    }

    return (
        <section>
            <button 
                onClick={showModal} 
                className="absolute top-0 right-0 bg-gray-400 text-black dark:text-gray-100 dark:bg-blue-700 rounded-xl p-2">
                    Add +
            </button>
            <div 
                onClick={onExitClick}
                className={modalDisplay ? " bg-gray-rgba dark:bg-dark-gray-rgba fixed top-0 left-0 right-0 bottom-0 z-10 flex justify-center items-center" : "hidden"}> 
                <form 
                    onClick={onStopPropagation}
                    className="w-1/2 max-w-2xl h-auto md:h-48 bg-gray-200 dark:bg-gray-600 p-3 rounded">
                    <h2 className="text-2xl mb-4">Add Task to List</h2>
                    <input 
                        type="text" 
                        value={taskTitle} 
                        name="taskTitle"
                        onChange={onTitleChange}
                        className="shadow border rounded w-full py-2 px-3 mb-4 dark:bg-slate-500"/>
                        <div className="flex flex-col-reverse md:flex-row justify-between">
                            <button 
                                type="button" 
                                onClick={onExitClick}
                                className="bg-red-500 hover:bg-red-600 text-white font-bold rounded-xl h-12 w-12">
                                X
                            </button>
                            <button
                                type="button"
                                onClick={onAddButtonClick}
                                className="rounded-xl text-white bg-blue-700 p-3 mb-4 md:mb-0 w-fit">
                                Add Task
                            </button>
                        </div>

                </form>
            </div>
        </section>
        
    )
}

export default AddNewTask;