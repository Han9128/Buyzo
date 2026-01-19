
import React, { useState } from "react";
import Header from './Components/Header/Header';
import "./index.css"
import initialProducts from "./data/products.json"
import Prodcuts from "./Components/Products/Products";
import Cart from "./Components/Cart/Cart";
import AddProduct from "./Components/AddProduct/AddProduct";
import Footer from "./Components/Footer/Footer";


function App() {
  const [showCart, setShowCart] = useState(false);
  const [cartProducts, addToCart] = useState([]);
  const [checkOut, setCheckOut] = useState(false);
  const [showForm,setShowForm] = useState(false);
  const [products,setProducts] = useState(initialProducts);

  function handleButtonClick(variant, itemId, itemImageimage, itemName) {
    if (variant === "add_to_cart") {
      handleAddToCart(itemId, itemImageimage, itemName);
    } else if (variant === "close_cart") {
      close();
    } else if (variant === "check_out") {
      // console.log(variant)
      openCheckOut();
    } else if (variant === "increase_item") {
      handleIncrease(itemId);
    } else if (variant === "decrease_item") {
      handleDecrease(itemId);
    }else if(variant === "add_products"){
      handleAddProducts();
    }
    else {
      open();
    }
  }

  function open() {
    setShowCart(true);
  }
  function close() {
    setShowCart(false);
    setCheckOut(false);
    setShowForm(false);
  }

  function openCheckOut() {
    // console.log(checkOut)
    setCheckOut(true);
  }

  function handleIncrease(itemId){
    // console.log(itemId);
    const prodId = cartProducts.findIndex(item => item.id === itemId);
    const updatedCartProducts = [...cartProducts]
    updatedCartProducts[prodId].qty += 1;
    addToCart(updatedCartProducts);
  }
  function handleDecrease(itemId){
    const prodId = cartProducts.findIndex(item => item.id === itemId);
    let updatedCartProducts = [...cartProducts]
    if(updatedCartProducts[prodId].qty === 1){
      // console.log(updatedCartProducts[prodId].qty)
        updatedCartProducts = updatedCartProducts.filter(item => item.id !== itemId)
        // console.log(updatedCartProducts);
    }else{
      updatedCartProducts[prodId] = {
        ...updatedCartProducts[prodId],
        qty:updatedCartProducts[prodId].qty - 1
      }
    }
    addToCart(updatedCartProducts);
  }
  function handleAddToCart(itemId, itemImage, itemName) {

    const prodId = cartProducts.findIndex(item => item.id === itemId);
    if (prodId === -1) {
      const newItem = {
        id: itemId,
        name: itemName,
        image: itemImage,
        qty: 1
      }
      addToCart((availableItem) => [...availableItem, newItem])
    } else {
      // we should not directly mutate a react state.
      const updatedCartProducts = [...cartProducts];
      updatedCartProducts[prodId].qty += 1;
      addToCart(updatedCartProducts);
    }
    // console.log(itemId)

    // console.log(cartProducts,newItem)

  }
  function handleAddProducts(){
    setShowForm(true);
   
  }

  function handleProductSubmit(prodName){
    const newProd = {
      id:products.length+1,
      name: prodName,
      image:"default.png"
    }
    setProducts([...products,newProd]);
    setShowForm(false);
  }

  return (
    <div>
      <Header openCart={handleButtonClick} onAddProduct={handleButtonClick} />
      <Prodcuts onAddToCart={handleButtonClick} products={products} />
      <Cart showCart={showCart} closeCart={close} cartProducts={cartProducts}
        onCloseCart={handleButtonClick} onCheckOut={handleButtonClick} showCheckOut={checkOut}
        onInc={handleButtonClick} onDec={handleButtonClick}>
      </Cart>
      {showForm && <AddProduct closeCart={close} onProductSubmit= {handleProductSubmit}/>}
      <Footer />

    
    </div>
  );
}

export default App;
