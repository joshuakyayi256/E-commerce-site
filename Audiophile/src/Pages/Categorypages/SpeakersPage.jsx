
import ProductCard from '../../components/ProductCard/ProductCard'
import data from '../../resources/data.json'
import './Assortedpage.css'
import About from "../../components/About/About"
import Category from "../../components/categories/Category"


const SpeakersPage = () => {
  // Filter products in the "speakers" category
  const speakersData = data.filter((product) => product.category === 'speakers');

  // Separate new products from the rest
  const newProducts = speakersData.filter(product => product.new);
  const otherProducts = speakersData.filter(product => !product.new);

  return (
    <div className='product__container'>
      <h2 className='products__category'>Speakers</h2>
      <div className="product__list">
        {/* Render new products first */}
        {newProducts.map((product, index) => (
          <ProductCard key={product.id} product={product} isReverse={index % 2 !== 0}/>
        ))}
        {/* Render other products */}
        {otherProducts.map((product, index) => (
          <ProductCard key={product.id} product={product} isReverse={index % 2 == 0}/>
        ))}
        {/* Render product cards for each product in the "speakers" category */}
        {/* {speakersData.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))} */}
      </div>
      <Category/>
      <About/>
    </div>
  );
};

export default SpeakersPage;