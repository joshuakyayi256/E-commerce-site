/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';
import './ProductCard.css'
import Button from '../Button/Button'

const ProductCard = ({ product, isReverse }) => {

  let imageUrl;
  if (window.innerWidth >= 1023) {
    imageUrl = product.categoryImage.desktop;
  } else if (window.innerWidth >= 768){
    imageUrl = product.categoryImage.tablet;
  }else {
    imageUrl = product.categoryImage.mobile;
  }


  return (
    <div className={`product__card ${isReverse ? 'reverse' : ''}`}>
      <img src={imageUrl} alt={product.name} />
      <div className='product__detail'>
        {product.new && <h1 className='title'>New Product</h1>}
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <Link to={`/product/${product.slug}`}>
          <Button content="SEE PRODUCT" backgroundColor="#D87D4A" hoverColor="#FBAF85"/>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;