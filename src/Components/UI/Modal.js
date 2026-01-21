import React, { useContext } from "react";
import { createPortal } from "react-dom";
import AppContext from "../../store/app-context";

// If we want to place some html element, component or section at a particular place in html we can do this using createPortal
// Here earlier the Modal was coming inside root I placed this in body outside root using createPortal
function Modal({children}){
    const {close} = useContext(AppContext);
    return (
        createPortal(
        (<div className="backdrop" onClick={close}>
            <div className="modal" onClick={(event)=>event.stopPropagation()}>
                {children}
            </div>
            </div>)
        , document.body)
    )
}

export default Modal;