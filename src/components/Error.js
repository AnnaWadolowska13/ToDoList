import React from "react";

function Error({message}){
    return(
        <div className="text-red-700 p-4">
            {message}
        </div>
    )
}

export default Error;