import { useCart } from '../../context/CartContext';
import { Link, useParams } from 'react-router-dom'
import data from '../../resources/data.json';
import Button from '../../components/Button/Button'
import Category from '../../components/categories/Category'
import About from '../../components/About/About'
// import { FaMinus } from "react-icons/fa6";
import './ProductDetails.css'
import { useState } from 'react';
// import { FaPlus } from "react-icons/fa";

const ProductDetailPage = () => {
  const {addToCart} = useCart();
  const { slug } = useParams();
  const [quantity, setQuantity] = useState(1);

  // Find the product with the matching slug
  const product = data.find((p) => p.slug === slug)

  if (!product) {
    return <div>Product not found</div>
  }

  let imageUrl;
  if (window.innerWidth >= 1023) {
    imageUrl = product.image.desktop;
  } else if (window.innerWidth >= 768){
    imageUrl = product.image.tablet;
  }else {
    imageUrl = product.image.mobile;
  }

  const handleAddToCart = () => {
    //Add the product with specified quantity to cart
    addToCart({...product, quantity});
    setQuantity(1);
  };

  const handleIncrement = () => {
    // Increment quantity by 1
    setQuantity(quantity + 1); 
  };

  const handleDecrement = () => {
    // Decrement quantity by 1, but maintain state 1
    if (quantity > 1) {
      setQuantity(quantity - 1); 
    }
  };

  return (
    <div className='product_details'>
      <Link to="/" className="go-back-link">
        <p>Go Back</p>
      </Link>
      <div className='basicInfo'>
        <img src={imageUrl} alt={product.name} />
        <div>
        {product.new && <h1 className='title'>New Product</h1>}
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p className='price'> $ {product.price.toLocaleString()}</p>
          <div className="quantity__container">
            <p className='quantity__desc'>
            <button className='minus' onClick={handleDecrement}>-</button>
            <button className = 'num'onChange={(e) => setQuantity(parseInt(e.target.value))}>{quantity}</button>
            <button className='plus' onClick={handleIncrement}>+</button>
            </p>
            <Button backgroundColor="#D87D4A" hoverColor="#FBAF85" content="Add to cart" onClick={handleAddToCart}/>
          </div>
          
        </div>
      </div>

      <div className="features_includes">
        <div className="features">
          <h3>FEATURES</h3>
          <p>{product.features}</p>
        </div>
        <div className="includes">
          <h3>in the box</h3>
          <ul>
            {product.includes.map((include, index) => (
                <li key={index}>
                  <span>{include.quantity}x  </span>  {include.item}
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className="images">
        <div className="first__second__img">
          <div>
            <img src={product.gallery.first.mobile} alt="product.name" />
          </div>
          <div>
            <img src={product.gallery.second.mobile} alt="product.name" />
          </div>
        </div>
        <img className="third__img" src={product.gallery.third.mobile} alt="product.name" />
      </div>
      <div className='other_products'>
        <h3>You May Also Like</h3>
        <div className="others">
          <ul className='other_products_list'>
          {product.others.map((otherProduct) => (
            <li key={otherProduct.slug} className='other_product'>
              <img src={otherProduct.image.mobile} alt={otherProduct.name} />
              <h4 className='otherProductsTitle'>{otherProduct.name}</h4>
              <Link to={`/product/${otherProduct.slug}`}>
                <Button backgroundColor="#D87D4A" hoverColor="#FBAF85" content="See Products" />
              </Link>
            </li>
          ))}
          </ul>
        </div>
      </div>

      <Category/>
      <About/>
      
    </div>
  );
};

export default ProductDetailPage;