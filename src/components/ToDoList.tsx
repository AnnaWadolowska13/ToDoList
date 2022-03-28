import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { userLogOut } from "../slices/toDoListSlice";
import { resetFilters } from "../slices/filtersSlice"

import Error from "./Error";
import Nav from "./Nav";
import OneColumnView from "./OneColView";
import TwoColView from "./TwoColView";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../store";

function ToDoList(){
    const dispatch = useDispatch<AppDispatch>();
    let navigate = useNavigate();
    const user = useSelector((state:RootState) => state.toDoList.user);
    const error = useSelector((state:RootState) => state.toDoList.error);
    const columns = useSelector((state:RootState) => state.filters.columns);
    
    let taskView;

    if(columns === "1"){
        taskView = <OneColumnView/>;
    } else if(columns === "2"){
        taskView = <TwoColView/>
    }
    const onLogOutCliked = () => {
        dispatch(userLogOut());
        dispatch(resetFilters());
        navigate("/");
    }

    if(!user){
        return (
            <div>
                <p> You are not logged in </p>
                <button
                    onClick={()=> navigate("/")}
                    className="bg-blue-500 hover:bg-blue-600 text-gray-100 font-bold p-3 rounded">
                        Go to LogIn Page
                </button>
            </div>
            
        )
    }

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