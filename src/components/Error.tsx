import React from "react";

type ErrorProps = {
    message: null | string
}

function Error({message}:ErrorProps){
    return(
        <div className="text-red-400 text-xl">
            {message}
        </div>
    )
}

export default Error;