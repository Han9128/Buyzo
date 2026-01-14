import React from "react";
import products from "../../data/products.json"
import "./products.css"


function Product({image,name}){
    return (
        <div className="products-card">
            <img src={image} alt={name} />
            <p>{name}</p>
            <button className="btn">Add to Cart</button>
        </div>
    )
}

function Prodcuts(){
    console.log(products);
    return (
    <div className="products-container">
            {products.map((prod)=>{
                return (
                    <Product image={require(`../../assets/images/${prod.image}`)} name={prod.name}/>
                )
            })}
         </div>
    )
}

export default Prodcuts;