import React, { useContext } from "react";

import "./products.css"
import Button from "../UI/Button";
import AppContext from "../../store/app-context";

function Product({id,image,name}){
    return (
        <div className="products-card">
            <img src={require(`../../assets/images/${image}`)} alt={name}  />
            <p>{name}</p>
            <Button variant= "add_to_cart" id={id} image={image} name={name}>Add to Cart</Button>
        </div>
    )
}

function Prodcuts(){
    // console.log(products);
    
const {products} = useContext(AppContext);
// console.log(products);
// console.log("products rendered");
    return (
    <div className="products-container">
            {products.map((prod)=>{
                return (
                    <Product key={prod.id} image={prod.image} 
                    name={prod.name} id={prod.id}/>
                )
            })}
         </div>
    )
}

export default Prodcuts;