

import ProductCard from '../../components/ProductCard/ProductCard';
import data from '../../resources/data.json'
import './Assortedpage.css';
import About from "../../components/About/About";
import Category from "../../components/categories/Category";

const HeadphonesPage = () => {
  // Filter products in the "headphones" category
  const headphonesData = data.filter((product) => product.category === 'headphones');

  // Separate new products from the rest
  const newProducts = headphonesData.filter(product => product.new);
  const otherProducts = headphonesData.filter(product => !product.new);

  return (
    <div className='product__container'>
      <h2 className='products__category'>Headphones</h2>
      <div className="product__list">
        {/* Render new products first */}
        {newProducts.map((product, index) => (
          <ProductCard key={product.id} product={product} isReverse={index % 2 !== 0}/>
        ))}
        {/* Render other products */}
        {otherProducts.map((product, index) => (
          <ProductCard key={product.id} product={product} isReverse={index % 2 == 0}/>
        ))}
      </div>
      <Category />
      <About />
    </div>
  );
};

export default HeadphonesPage;