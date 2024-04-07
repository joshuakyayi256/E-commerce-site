
import { Link } from 'react-router-dom'
import Speaker from '../../assets/products/image-speaker-zx9.png'
import Button from '../Button/Button'
import './Product.css'

const Products = () => {
  return (
    <section className="product">
      <div className='product__one__content'>
        <img src={Speaker} alt="ZX9 speaker" />
        <div className="product__details">
          <h3 className="product__title">ZX9 SPEAKER</h3>
          <p className="product__description">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
          </p>
          <Link to="/product/zx9-speaker">
            < Button content='See Product' backgroundColor="#000000" hoverColor="#4C4C4C"/>
          </Link>
        </div>
      </div>

      <div className="product__two__content">
        <h3 className="product__title">ZX7 SPEAKER</h3>
        <Link to="/product/zx7-speaker">
          <Button content='See Product' backgroundColor="#F1F1F1" hoverColor="#000000" hoverTextColor='white' color='#000000' border="1px solid black"/>
        </Link>
      </div>

      <div className="product__three__content">
        <div className="img"></div>
        <div className="product__three__details">
          <h3 className='title'>YX1 earphones</h3>
          <Link to="/product/yx1-earphones">
            <Button content='See Product' backgroundColor="#F1F1F1" hoverColor="#000000" hoverTextColor='white' color='#000000' border="1px solid black"/>
          </Link>
        </div>
      </div>

    </section>
  )
}

export default Products