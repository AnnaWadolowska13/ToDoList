import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { userLogin } from './toDoListSlice'

function LogForm(){
    const [userId, setUserId] = useState("");
    const dispatch = useDispatch();

    const handleChangeUserId = event => setUserId(event.target.value);
    const handleSubmitClick = () =>{
        dispatch(userLogin(userId));
    }

    return(
        <div className="w-48 mx-auto my-10"> 
            <form className="p-3 shadow-md bg-slate-100 dark:bg-slate-700">
                <label className="block text-sm font-bold mb-2" htmlFor="userId">Enter User Name</label>
                <input 
                    className="shadow border rounded w-full py-2 px-3 mb-2 dark:bg-slate-500"
                    type="text" 
                    name="userId"
                    id="userId"
                    value={userId}
                    onChange={handleChangeUserId} />
                    <button 
                        type="button" 
                        onClick={handleSubmitClick} 
                        className="bg-blue-500 hover:bg-blue-600 text-gray-100 font-bold p-3 rounded"
                        > 
                        Submit 
                    </button>
            </form>
        </div>
    )
}

export default LogForm;