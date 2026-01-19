import React from "react";
import { createPortal } from "react-dom";

// If we want to place some html element, component or section at a particular place in html we can do this using createPortal
// Here earlier the Modal was coming inside root I placed this in body outside root using createPortal
function Modal({children, showCart,closeCart}){
    return (
        createPortal(
        (<div className="backdrop" onClick={closeCart}>
            <div className="modal" onClick={(event)=>event.stopPropagation()}>
                {children}
            </div>
            </div>)
        , document.body)
    )
}

export default Modal;