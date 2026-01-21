
import React, { useContext, useState } from "react";
// import { useRef } from "react";
import Modal from "../UI/Modal";
import "./addproduct.css"
import AppContext from "../../store/app-context";

function AddProduct(){

    // const nameRef = useRef();
    const [name,setName] = useState();
    const {handleProductSubmit} = useContext(AppContext);
    function handleAddProducts(event){
        event.preventDefault();
        // const name = nameRef.current.value;
        // console.log(event);
        // console.log(name);
        // onProductSubmit(name);
        handleProductSubmit(name);
    }

    function handleChange(event){
        const prodName = event.target.value;
        setName(prodName);
    }

    const {showForm} = useContext(AppContext);

    return ( showForm && <Modal>
        <div className="add-product">
            <h2>Add Product</h2>
        <form onSubmit={handleAddProducts} className="add-product-form" >
            <div>
            <label className="prod-name" htmlFor="prod">Product Name: </label>
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