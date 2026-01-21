import React, { useContext } from "react";
import AppContext from "../../store/app-context";

function Button({children,variant,id,image,name}){
    const {handleButtonClick} = useContext(AppContext)
    return (
        <button className="btn" onClick={()=> handleButtonClick(variant,id,image,name)}>{children}</button>
    )
}

export default Button;