
import ProductCard from '../../components/ProductCard/ProductCard'
import data from '../../resources/data.json'
import './Assortedpage.css'
import About from "../../components/About/About"
import Category from "../../components/categories/Category"


const EarphonesPage = () => {
  // Filter products in the "Earphones" category
  const earphonesData = data.filter((product) => product.category === 'earphones');

  return (
    <div className='product__container'>
      <h2 className='products__category'>Earphones</h2>
      <div className="product__list">
        {/* Render product cards for each product in the "Earphones" category */}
        {earphonesData.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      </div>
      <Category/>
      <About/>
    </div>
  );
};

export default EarphonesPage;