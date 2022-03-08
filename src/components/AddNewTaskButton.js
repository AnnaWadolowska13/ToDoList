import React from "react";

function AddNewTaskButton(props){

    function handleButtonClick(event){
        event.preventDefault();
        // console.log("click", props);
        props.onAddButtonClick();
    }

    return(
        // <></>
        <button onClick={handleButtonClick}
            className="absolute top-0 right-0 bg-gray-400 text-black dark:text-gray-100 dark:bg-blue-700 rounded-xl p-2">
                Add +
        </button>
    )
}
export default AddNewTaskButton;