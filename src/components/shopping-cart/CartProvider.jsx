import React, { createContext, useReducer } from 'react';

export const CartContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      const exists = state.cart.find(item => item.id === action.payload.id);
      if (exists) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }]
      };

    case 'UPDATE_CART':
      return {
        ...state,
        cart: state.cart
          .map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: action.payload.quantity }
              : item
          )
          .filter(item => item.quantity > 0) // remove if quantity becomes 0
      };

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      };

    default:
      return state;
  }
}

const initialState = {
  cart: []
};

const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(reducer, initialState);

  const products = [
    { id: 1, name: 'Product A' },
    { id: 2, name: 'Product B' },
    { id: 3, name: 'Product C' }
  ];

  return (
    <CartContext.Provider value={{ cartState, dispatch, products }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
