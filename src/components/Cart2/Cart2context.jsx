import React, { createContext, useReducer } from 'react'


  function Reducer(state,action){
   switch (action.type) {
    case 'ADD_TO_CART':
        
        return {...state,cart:[...state.cart, {...action.payload,quantity:1}]}
        //setCart(cartState.cart.map((i)=>i.id==item.id?{...i,quantity:i.quantity+1}:i))
    
   case 'UPDATE_CART':
        
        return {...state, cart:state.cart.map((i)=>i.id==action.payload.id?{...i,quantity:action.payload.quantity}:i)}
   case 'REMOVE_FROM_CART':
        
        return {...state, cart:state.cart.filter((i)=>i.id!==action.payload)}
       
//    setCart(cart.filter((i)=>i.id!==id))
    default:
        return state;
   }
  }
export const cart2con=createContext()
const Cart2context = ({children}) => {
     const [cartState, dispatch] = useReducer(Reducer,{cart:[]});
  return (
    <cart2con.Provider value={{cartState,dispatch}}>
      {children}
    </cart2con.Provider>
  )
}

export default Cart2context
