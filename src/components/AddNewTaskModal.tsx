import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../slices/toDoListSlice"
import { AppDispatch } from "../store";

type ModalProps = {
    onExitModal:()=>void,
}

function AddNewTaskModal({onExitModal}:ModalProps){
    const dispatch = useDispatch<AppDispatch>();
    const [taskTitle, setTaskTitle] = useState("");
    const [taskError, setTaskError] = useState(false);

    const handleTitleChange = (e:React.ChangeEvent<HTMLInputElement>) => setTaskTitle(e.target.value);

    const handleExitClick = () => {
        setTaskTitle("");
        onExitModal();
    }
    
    const handleStopPropagation = (e:React.MouseEvent) => {
        //obsługuje i przycisk i klikniecie na zaciemnione tło
        e.preventDefault();
        e.stopPropagation();
    }
    
    const handleFormSubmit = () => {
        console.log("submit")
        if(taskTitle){
            dispatch(addTask(taskTitle));
            setTaskTitle("");
            setTaskError(false);
            onExitModal();
        }
        else{
            setTaskError(true);
        }
    }

    return(
        <div 
            onClick={handleExitClick}
            className=" bg-gray-rgba dark:bg-dark-gray-rgba fixed inset-0 z-10 flex justify-center items-center"> 
            <form 
                onClick={handleStopPropagation}
                onSubmit={handleFormSubmit}
                className="w-6/12 max-w-2xl h-auto md:h-52 bg-gray-200 dark:bg-gray-600 p-3 rounded">
                <h2 className="text-2xl mb-4">Add Task to List</h2>
                <input 
                    type="text" 
                    value={taskTitle} 
                    name="taskTitle"
                    required
                    onChange={handleTitleChange}
                    className="shadow border rounded w-full py-2 px-3 mb-2 dark:bg-slate-500"/>
                {taskError && <p className="text-sm absolute text-red-500"> Filed is required</p>}
                <div className="flex flex-col-reverse md:flex-row justify-between mt-6">
                    <button 
                        type="button" 
                        onClick={handleExitClick}
                        className="bg-red-500 hover:bg-red-600 text-white font-bold rounded-xl h-12 w-12">
                        X
                    </button>
                    <button
                    onClick={handleFormSubmit}
                        type="submit"
                        className="rounded-xl text-white bg-blue-700 p-3 mb-4 md:mb-0 w-fit">
                        Add Task
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddNewTaskModal;