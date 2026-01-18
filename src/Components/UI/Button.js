import React from "react";

function Button({children,variant,onClick,id,image,name}){


    return (
        <button className="btn" onClick={()=> onClick(variant,id,image,name)}>{children}</button>
    )
}

export default Button;