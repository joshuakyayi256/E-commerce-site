/* eslint-disable react/prop-types */
import  { createContext, useContext, useState } from 'react';

// Creating a context for the cart
const CartContext = createContext();

// Custom hook to consume the cart context
// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  return useContext(CartContext);
}

// Context Provider component
export function CartProvider({ children }) {
  // State to store cart items
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart
  const addToCart = (item) => {
    const existingItemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);
    if (existingItemIndex !== -1) {
      // If the item is already in the cart, update its quantity
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += item.quantity;
      setCartItems(updatedCartItems);
    } else {
      // If the item is not in the cart, add it as a new item
      setCartItems([...cartItems, item]);
    }
  };

const removeFromCart = (itemId) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === itemId) {
        if (item.quantity === 1) {
          // If quantity becomes 0, remove the item from the cart
          return null;
        } else {
          // Decrease the quantity of the item
          return { ...item, quantity: item.quantity - 1 };
        }
      }
      return item;
    }).filter(Boolean); // Filter out null values
    setCartItems(updatedCartItems);
  };

  const increaseQuantity = (itemId) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };


  const clearCart = () => {
    setCartItems([]);
  };

  // Calculate total price of all items in the cart
  const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

//   const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  // Providing cart state and functions to children components
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, increaseQuantity, total, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}