import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { userLogOut } from "../slices/toDoListSlice";

import Error from "./Error";
import Nav from "./Nav";
import OneColumnView from "./OneColView";
import TwoColView from "./TwoColView";

function ToDoList(){
    const dispatch = useDispatch();
    const error = useSelector((state) => state.toDoList.error);
    const columns = useSelector((state) => state.filters.columns);
    
    let taskView;

    if(columns === "1"){
        taskView = <OneColumnView/>;
    } else if(columns === "2"){
        taskView = <TwoColView/>
    }
    const onLogOutCliked = () => dispatch(userLogOut())

    return(
        <section>
            <div className="w-fit md:w-[44rem] lg:w-[60rem] m-2">
                <h2 className="font-bold text-2xl text-center mb-4">Your To-Do List </h2>
                {error 
                    ? <Error message={error}/> 
                    : 
                        <div className="relative">
                            <Nav/>
                            {taskView}
                        </div>}
                <button 
                    onClick={onLogOutCliked}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold p-3 rounded mt-2"
                    >Log Out</button>
            </div>            
        </section>

    )
}
export default ToDoList;