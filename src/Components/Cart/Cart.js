import React, { useContext } from "react";
import Modal from "../UI/Modal";
import  "./cart.css"
import Button from "../UI/Button"
import AppContext from "../../store/app-context";

function CartItem({id,name,image,qty}){
      // const {handleIncrease,handleDecrease}    =  useContext(AppContext)
    return (
        <div className="cart-item">
            <div className="item-img">
            <img src={require(`../../assets/images/${image}`)} alt={name} style={{width:"150px", height:"200px"}}/>
            </div>
            <div className="item-info">
                <p>{name}</p>
                <div className="qty">
                    <p>Qty:{qty}</p>
                </div>
            </div>
            <div className="update-btn">
                <Button variant="increase_item" id = {id}>+</Button>
                <Button variant= "decrease_item" id ={id} >-</Button>
            </div>

        </div>
    )
}

function Cart(){
   const {showCart,cartProducts,checkOut} = useContext(AppContext)
    if(showCart && !checkOut){
        return (<Modal>
            {cartProducts.length>0 ? (
             <div className="cart-container">
              <h2 className="cart-heading">Cart</h2>  

           {cartProducts.map(item=>(
                <CartItem key={item.id} id={item.id} name={item.name} qty={item.qty} image={item.image}/>
            ))}
            <div className="cart-bottom-btn">
            <Button variant= "close_cart" >Close</Button>
            <Button variant="check_out">Check Out</Button>
            </div>
             </div>) : 
              (<div className="cart-container">
              <h2 className="cart-heading">Cart</h2>  
             <div className="empty-cart">
                <h3>Cart is emtpy</h3>
                <div className="cart-bottom-btn">
            <Button variant= "close_cart">Close</Button>
            </div>
            </div>
            </div>)}
        </Modal>)
    } 
    if(checkOut){
      return (<Modal  >
             <div className="payment-gateway">
        <h3>Payment Methods: </h3>
        <ul className="payment-ptions">
          <li className="gateway">
            <Button variant="close_cart">PhonePe</Button>
          </li>
          <li className="gateway">
            <Button variant="close_cart">GooglePay</Button>
          </li>
          <li className="gateway">
            <Button variant="close_cart">AmazonPay</Button>
          </li>
          <li className="gateway">
            <Button variant="close_cart">Bank Card</Button>
          </li>
          <li className="gateway">
            <Button variant="close_cart">Cash on Delivery</Button>
          </li>
        </ul>
      </div>
        </Modal>)
    } 
    
}

export default Cart;