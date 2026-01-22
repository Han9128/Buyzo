import React, { useContext } from "react";

import "./products.css"
import Button from "../UI/Button";
import AppContext from "../../store/app-context";
import Loader from "../UI/Loader";

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
    
const {products,loading} = useContext(AppContext);
// console.log(products);
// console.log("products rendered")
    return (
        loading ? <Loader/> :
    <div className="products-container">
            {Object.keys(products).map((k)=>{
                return (
                    <Product key={k} image={products[k].image} 
                    name={products[k].name} id={products[k].id}/>
                )
            })}
         </div>
    )
}

export default Prodcuts;