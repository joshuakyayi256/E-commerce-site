import { useState } from 'react';
import { useCart } from '../../context/CartContext';
import './Cart.css';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, total, increaseQuantity, removeFromCart, clearCart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(true);
  
  // Function to handle increasing quantity of an item in the cart
  const handleIncreaseQuantity = (itemId) => {
    increaseQuantity(itemId);
  };

  // Function to handle decreasing quantity of an item in the cart
  const handleDecreaseQuantity = (itemId) => {
    removeFromCart(itemId);
  };

  // Function to handle clearing the entire cart
  const handleClearCart = () => {
    clearCart();
  };

  // Function to handle checkout
  const handleCheckout = () => {
    // Close the cart when checkout is clicked
    setIsCartOpen(false);
  };

  return (
    <>
      {isCartOpen && <div className="overlay" onClick={() => setIsCartOpen(false)}></div>}
      <div className={`cart__container ${isCartOpen ? 'open' : 'closed'}`}>
        <div className="cart_title">
          <h4>CART <span className='item__num'>({cartItems.length})</span></h4>
          <p onClick={handleClearCart}>Remove All</p>
        </div>
        <ul>
          {cartItems && cartItems.length > 0 && cartItems.map((item, index) => (
            <li key={index}>
              <div className="item__desc">
                <img src={item.image?.desktop} alt="product image" />
                <p className='price'>
                  <span className='item_name'>{item.name}</span>
                  <span>$ {item.price?.toLocaleString()}</span>
                </p>
                
                <p className='quantity__desc'>
                  <button className='minus' onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                  <button className='num' >{item.quantity}</button>
                  <button className='plus' onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                </p>
              </div>
            </li>
          ))}
        </ul>
        <div className="total__price">
          <span>Total: </span>
          <h3>${total.toLocaleString()}</h3>
        </div>
        <Link to='/checkout'>
          <Button backgroundColor="#D87D4A" hoverColor="#FBAF85" content="Checkout" fullWidth={true} onClick={handleCheckout}/>  
        </Link>
      </div>
    </>
  );
};

export default Cart;