/* eslint-disable react/prop-types */
import { useCart } from '../../context/CartContext';
import { useState } from 'react';
import './Header.css'
import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaShoppingCart } from "react-icons/fa"
import Category from "../categories/Category"
import Cart from '../Cart/Cart';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { cartItems } = useCart();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  //Toggle visibility of the cart component
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  }

  return (
    <header className="header">
      <div className="header__content">
        <div className='logo'>
          <FaBars className='header__menu' onClick={toggleMenu}/>
          <Link to='/'>
            <h1 className="header__title">audiophile</h1>
          </Link>
        </div>
        <ul className={`header__nav ${isMenuOpen ? 'open' : ''}`}>
          <li className="header__nav-item">
            <NavLink to="/" >HOME</NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink to="/headphones" >HEADPHONES</NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink to="/speakers" >SPEAKERS</NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink to="/earphones">EARPHONES</NavLink>
          </li>
        </ul>
        <div className="header__cart" onClick={toggleCart}>
          {cartItems.length > 0 && <div className="cart__count">{cartItems.length}</div>}
            <FaShoppingCart/>
        </div>
      </div>
      <div className='navbar'>
        {isMenuOpen && <Category />}
      </div>
      <div className="cart">
        {isCartOpen && <Cart />}
      </div>
    </header>
  );
};

export default Header;