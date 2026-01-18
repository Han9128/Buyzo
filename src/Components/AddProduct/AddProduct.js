
import React, { useState } from "react";
import { useRef } from "react";
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import "./addproduct.css"

function AddProduct({closeCart, onProductSubmit}){

    // const nameRef = useRef();
    const [name,setName] = useState();
    function handleAddProducts(event){
        event.preventDefault();
        // const name = nameRef.current.value;
        // console.log(event);
        // console.log(name);
        // onProductSubmit(name);
        onProductSubmit(name);
    }

    function handleChange(event){
        const prodName = event.target.value;
        setName(prodName);
    }

    return ( <Modal closeCart={closeCart}>
        <div className="add-product">
            <h2>Add Product</h2>
        <form onSubmit={handleAddProducts} className="add-product-form" >
            <div>
            <label className="prod-name" for="prod">Product Name: </label>
            <br></br>
            {/* we can use useRef hooks to handle forms in react */}
            {/* <input id="prod" placeholder="T-Shirt" ref={nameRef}></input> */}
            {/* we can also use react state to handel forms */}
            <input id="prod" placeholder="T-Shirt" onChange={handleChange}></input>
            <br></br>
            <button>Add</button>
            </div>
        </form>
        </div>
    </Modal>
    );
}

export default AddProduct;