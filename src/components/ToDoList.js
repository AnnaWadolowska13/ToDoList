import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { userLogOut } from "./toDoListSlice";

import Error from "./Error";
import Task from './Task'
import Nav from "./Nav";

function ToDoList(){
    const dispatch = useDispatch();
    const user = useSelector((state) => (state.toDoList.user));
    const list = useSelector((state) => state.toDoList.toDoList.filter((task) => task.userId.toString() === user ))
    const error = useSelector((state) => state.toDoList.error);
    const filter = useSelector((state) => state.toDoList.show);

    const filteredList = list.filter( (task) => {
        if(filter === 'completed') return task.completed === true
        if(filter === 'uncompleted') return task.completed === false
        return true
    })

    const taskList = filteredList.map((task) => <Task key={task.id} task={task}/>);
    const onLogOutCliked = () => dispatch(userLogOut())


    return(
        <section>
            <div className="w-fit md:w-[36rem] m-2">
                <h2 className="font-bold text-2xl text-center mb-4">To Do List </h2>
                {error 
                    ? <Error message={error}/> 
                    : 
                        <div className="relative">
                            <Nav/>
                            <ul>{taskList}</ul>
                        </div>}
                {!error && !taskList.length && <p> Empty list </p>}
                <button 
                    onClick={onLogOutCliked}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold p-3 rounded"
                    >Log Out</button>
            </div>            
        </section>

    )
}
export default ToDoList;