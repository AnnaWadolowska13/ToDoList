import React from "react";

type NewTaskButton = {
    onAddButtonClick:()=>void
}

function AddNewTaskButton(props:NewTaskButton){

    function handleButtonClick(event:React.MouseEvent){
        event.preventDefault();
        // console.log("click", props);
        props.onAddButtonClick();
    }

    return(
        // <></>
        <button onClick={handleButtonClick}
            className="absolute top-0 right-0 bg-gray-400 text-black dark:text-gray-100 dark:bg-blue-700 rounded-xl p-2 mt-3">
                Add +
        </button>
    )
}
export default AddNewTaskButton;