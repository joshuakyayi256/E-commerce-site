import { Link } from 'react-router-dom'
import { MdKeyboardArrowRight } from "react-icons/md"
import Speaker from '../../assets/products/speaker.png'
import Earphones from '../../assets/products/earphones.png'
import Headphones from '../../assets/products/headphones.png'
import './Category.css'

const Category = () => {

  return (
    <section className="category">
      <div className="category__content">
        <img src={Headphones} alt='Headphones' />
        <h2 className="category__title">Headphones</h2>
        <div className="shop__button">
            <span>SHOP</span>
            <div className='arrow'>
              <Link to="/speakers"><MdKeyboardArrowRight/></Link>
            </div>
        </div>
      </div>

      <div className="category__content">
        <img src={Speaker} alt='Speaker' />
        <h2 className="category__title">Speakers</h2>
        <div className="shop__button">
          <span>SHOP</span>
          <div className='arrow'>
            <Link to="/speakers"><MdKeyboardArrowRight/></Link>
          </div>
        </div>
      </div>

      <div className="category__content">
        <img src={Earphones} alt='Earphones' />
        <h2 className="category__title">Earphones</h2>
        <div className="shop__button">
          <span>SHOP</span>
          <div className='arrow'>
            <Link to="/earphones"><MdKeyboardArrowRight/></Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Category