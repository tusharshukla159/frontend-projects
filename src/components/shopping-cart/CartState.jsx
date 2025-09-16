import React, { useContext } from 'react';
import { CartContext } from './CartProvider';

const CartState = () => {
  const { cartState, dispatch, products } = useContext(CartContext);

  function handleAddToCart(item) {
    dispatch({
      type: 'ADD_TO_CART',
      payload: item
    });
  }

  function handleRemoveFromCart(item) {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: item.id
    });
  }

  function updateQuantity(id, quantity) {
    dispatch({
      type: 'UPDATE_CART',
      payload: { id: id, quantity: quantity }
    });
  }

  return (
    <div className="CartStateWrapper">
      <h2>Cart</h2>
      <div>
        {cartState.cart.length > 0 ? (
          cartState.cart.map(item => (
            <div key={item.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
              <p style={{ marginRight: '10px' }}>{item.name} - {item.quantity}</p>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
              <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
            </div>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>

      <h2>Products</h2>
      <ul>
        {products.map(item => (
          <div key={item.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
            <li style={{ marginRight: '10px' }}>{item.name}</li>
            <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default CartState;
