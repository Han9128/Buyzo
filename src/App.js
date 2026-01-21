
import React from "react";
import Header from './Components/Header/Header';
import "./index.css"

import Prodcuts from "./Components/Products/Products";
import Cart from "./Components/Cart/Cart";
import AddProduct from "./Components/AddProduct/AddProduct";
import Footer from "./Components/Footer/Footer";
import AppContextProvider from "./store/AppContextProvider";



function App() {
  // const [showCart, setShowCart] = useState(false);
  // const [cartProducts, addToCart] = useState([]);
  // const [checkOut, setCheckOut] = useState(false);
  // const [showForm,setShowForm] = useState(false);
  // const [products,setProducts] = useState(initialProducts);

  // function handleButtonClick(variant, itemId, itemImageimage, itemName) {
  //   if (variant === "add_to_cart") {
  //     handleAddToCart(itemId, itemImageimage, itemName);
  //   } else if (variant === "close_cart") {
  //     close();
  //   } else if (variant === "check_out") {
  //     // console.log(variant)
  //     openCheckOut();
  //   } else if (variant === "increase_item") {
  //     handleIncrease(itemId);
  //   } else if (variant === "decrease_item") {
  //     handleDecrease(itemId);
  //   }else if(variant === "add_products"){
  //     handleAddProducts();
  //   }
  //   else {
  //     open();
  //   }
  // }

  // function open() {
  //   setShowCart(true);
  // }
  // function close() {
  //   setShowCart(false);
  //   setCheckOut(false);
  //   setShowForm(false);
  // }

  // function openCheckOut() {
  //   // console.log(checkOut)
  //   setCheckOut(true);
  // }

  // function handleIncrease(itemId){
  //   // console.log(itemId);
  //   const prodId = cartProducts.findIndex(item => item.id === itemId);
  //   const updatedCartProducts = [...cartProducts]
  //   updatedCartProducts[prodId].qty += 1;
  //   addToCart(updatedCartProducts);
  // }
  // function handleDecrease(itemId){
  //   const prodId = cartProducts.findIndex(item => item.id === itemId);
  //   let updatedCartProducts = [...cartProducts]
  //   if(updatedCartProducts[prodId].qty === 1){
  //     // console.log(updatedCartProducts[prodId].qty)
  //       updatedCartProducts = updatedCartProducts.filter(item => item.id !== itemId)
  //       // console.log(updatedCartProducts);
  //   }else{
  //     updatedCartProducts[prodId] = {
  //       ...updatedCartProducts[prodId],
  //       qty:updatedCartProducts[prodId].qty - 1
  //     }
  //   }
  //   addToCart(updatedCartProducts);
  // }
  // function handleAddToCart(itemId, itemImage, itemName) {

  //   const prodId = cartProducts.findIndex(item => item.id === itemId);
  //   if (prodId === -1) {
  //     const newItem = {
  //       id: itemId,
  //       name: itemName,
  //       image: itemImage,
  //       qty: 1
  //     }
  //     addToCart((availableItem) => [...availableItem, newItem])
  //   } else {
  //     // we should not directly mutate a react state.
  //     const updatedCartProducts = [...cartProducts];
  //     updatedCartProducts[prodId].qty += 1;
  //     addToCart(updatedCartProducts);
  //   }
  //   // console.log(itemId)

  //   // console.log(cartProducts,newItem)

  // }
  // function handleAddProducts(){
  //   setShowForm(true);
   
  // }

  // function handleProductSubmit(prodName){
  //   const newProd = {
  //     id:products.length+1,
  //     name: prodName,
  //     image:"default.png"
  //   }
  //   setProducts([...products,newProd]);
  //   setShowForm(false);
  // }

  // console.log("app rendered");
  
  // Here doing this wont change the state as app is wrapping or we can say providing context so it can not consume a context
  // provider can not be consumer

  // const {showForm} = useContext(AppContext);
  // console.log(showForm);

  return (
    // we know that we can return a single element in jsx so we have to wrap everything in div what if we don't want to use div to wrap?
    // There are two methods:
    // 1. Use React.fragments
    // 2. Use empty tag (<> </>)
    // <React.Fragment>
    <AppContextProvider>
      <Header />
      <Prodcuts  />
      <Cart />
      <AddProduct/>
      <Footer /> 

    </AppContextProvider>
    // {/* </React.Fragment> */}
  );
}

export default App;
