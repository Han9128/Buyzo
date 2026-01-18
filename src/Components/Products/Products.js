import React from "react";

import "./products.css"
import Button from "../UI/Button";


function Product({id,onAddToCart,image,name}){
    return (
        <div className="products-card">
            <img src={require(`../../assets/images/${image}`)} alt={name}  />
            <p>{name}</p>
            <Button variant= "add_to_cart" id={id} image={image} name={name} onClick={onAddToCart}>Add to Cart</Button>
        </div>
    )
}

function Prodcuts({onAddToCart,products}){
    // console.log(products);
    return (
    <div className="products-container">
            {products.map((prod)=>{
                return (
                    <Product key={prod.id} onAddToCart={onAddToCart} image={prod.image} 
                    name={prod.name} id={prod.id}/>
                )
            })}
         </div>
    )
}

export default Prodcuts;