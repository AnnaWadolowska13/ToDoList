import React, { useState } from "react";
import AddNewTaskButton from "./AddNewTaskButton";
import AddNewTaskModal from "./AddNewTaskModal"

function AddNewTask(){

    const [modalDisplay, setModalDisplay] = useState(false);

    const changeModalDisplay = () => { setModalDisplay(modalDisplay => !modalDisplay)};

    return (
        <section>
            <AddNewTaskButton onAddButtonClick={changeModalDisplay}/>
            {modalDisplay && <AddNewTaskModal onExitModal={changeModalDisplay}/>}
        </section>
        
    )
}

export default AddNewTask;