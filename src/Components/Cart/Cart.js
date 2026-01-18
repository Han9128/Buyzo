import React from "react";
import Modal from "../UI/Modal";
import  "./cart.css"
import Button from "../UI/Button"

function CartItem({id,name,image,qty, onInc,onDec}){
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
                <Button variant="increase_item" id = {id} onClick={onInc}>+</Button>
                <Button variant= "decrease_item" id ={id} onClick={onDec}>-</Button>
            </div>

        </div>
    )
}

function Cart({children,showCart,onCloseCart,cartProducts, closeCart, onCheckOut, showCheckOut, onInc,onDec}){

    if(showCart && !showCheckOut){
        return (<Modal closeCart={closeCart}>
            {cartProducts.length>0 ? (
             <div className="cart-container">
              <h2 className="cart-heading">Cart</h2>  

           {cartProducts.map(item=>(
                <CartItem key={item.id} id={item.id} name={item.name} qty={item.qty} image={item.image} onInc={onInc} onDec={onDec} />
            ))}
            <div className="cart-bottom-btn">
            <Button variant= "close_cart" onClick={onCloseCart}>Close</Button>
            <Button variant="check_out" onClick={onCheckOut} >Check Out</Button>
            </div>
             </div>) : 
              (<div className="cart-container">
              <h2 className="cart-heading">Cart</h2>  
             <div className="empty-cart">
                <h3>Cart is emtpy</h3>
                <div className="cart-bottom-btn">
            <Button variant= "close_cart" onClick={onCloseCart}>Close</Button>
            </div>
            </div>
            </div>)}
        </Modal>)
    } 
    if(showCheckOut){
      return (<Modal closeCart={closeCart} >
             <div className="payment-gateway">
        <h3>Payment Options: </h3>
        <ul className="payment-ptions">
          <li className="gateway">
            <Button>PhonePe</Button>
          </li>
          <li className="gateway">
            <Button>PhonePe</Button>
          </li>
          <li className="gateway">
            <Button>GooglePay</Button>
          </li>
          <li className="gateway">
            <Button>AmazonPay</Button>
          </li>
          <li className="gateway">
            <Button>Bank Card</Button>
          </li>
          <li className="gateway">
            <Button>Cash on Delivery</Button>
          </li>
        </ul>
      </div>
        </Modal>)
    } 
    
}

export default Cart;