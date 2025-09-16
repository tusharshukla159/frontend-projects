import React, { useContext, useReducer, useState } from "react";
import {cart2con} from "./Cart2context";

const Cart2 = () => {
   
 const{cartState,dispatch}=useContext(cart2con);
  const products = [
    {
      id: 1,
      name: "Product A",
    },
    {
      id: 2,
      name: "Product B",
    },
    {
      id: 3,
      name: "Product C",
    },
  ];

//   const [cartState, dispatch] = useReducer(Reducer,{cart:[]});
  function addToCart(item) {
    const existing = cartState.cart.find((i) => i.id === item.id);
  if (existing){
    dispatch({
        type:'UPDATE_CART',
        payload:{id:item.id,quantity:existing.quantity+1}
    })
  }
  else{
    dispatch({
        type:'ADD_TO_CART',
        payload:item
    })
  }
}
  function removeFromCart(id){
     dispatch({
        type:'REMOVE_FROM_CART',
        payload:id
    })
    
  }
  function updateQuantity(id, quantity){
     dispatch({
        type:'UPDATE_CART',
        payload:{id:id,quantity:quantity}
    })
   
  }
  return (
    <div className="Cart2Wrapper">
        <ul>
            <h1>Cart</h1>
           { cartState.cart.map((item)=>(
            <div key={item.id} style={{display:'flex'}}>
               <li>
                {item.name} -{item.quantity}
               </li>
               <button  onClick={()=>updateQuantity(item.id,item.quantity+1)}>+</button>
               <button disabled={item.quantity==0} onClick={()=>updateQuantity(item.id,item.quantity-1)}>-</button>
               <button onClick={()=>removeFromCart(item.id)}>Remove from Cart</button>
               </div>
            ))
        }</ul>
        <h1>Products</h1>
      {products.map((item) => (
        <div key={item.id}>
          {item.name}
          <button onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Cart2;
