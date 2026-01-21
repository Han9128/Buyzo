
import { createContext } from "react";

const AppContext = createContext({
    showCart:false,
    products:[],
    checkOut:false,
    cartProducts:[],
    showForm:false,
    handleButtonClick: () =>{},
    handleAddProducts:() =>{},
    handleAddToCart:() =>{},
    handleDecrease:() =>{},
    handleIncrease:() =>{},
    handleProductSubmit:() =>{},
    openCheckOut:() =>{},
    open:() =>{},
    close:() =>{},
});

export default AppContext;