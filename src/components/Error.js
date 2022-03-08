import React from "react";

function Error({message}){
    return(
        <div className="text-red-400 text-xl">
            {message}
        </div>
    )
}

export default Error;