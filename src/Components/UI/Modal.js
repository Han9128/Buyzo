import React from "react";

function Modal({children, showCart,closeCart}){
    return (
        (<div className="backdrop" onClick={closeCart}>
            <div className="modal" onClick={(event)=>event.stopPropagation()}>
                {children}
            </div>
            </div>)
    )
}

export default Modal;