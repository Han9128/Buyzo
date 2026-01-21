
import React from "react";
import "./header.css"
import Button from "../UI/Button";



function Header(){
    
    return (
        <div className="header">
            <h1>Buyzo</h1>
            <div className="btns">
            <Button variant="add_products">Add Prodcuts</Button>
            <Button variant="cart" >Cart</Button>
            </div>
        </div>

        
        
    )
}

export default Header;