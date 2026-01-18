
import React from "react";
import "./header.css"
import Button from "../UI/Button";



function Header({openCart,onAddProduct}){
    return (
        <div className="header">
            <h1>Buyzo</h1>
            <div className="btns">
            <Button variant="add_products" onClick={onAddProduct}>Add Prodcuts</Button>
            <Button variant="cart" onClick={openCart}>Cart</Button>
            </div>
        </div>

        
        
    )
}

export default Header;