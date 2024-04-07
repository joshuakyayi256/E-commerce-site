import { Link } from 'react-router-dom'
import './Footer.css'
import { FaFacebook, FaInstagram } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"


const Footer = () => {
  return (
  <footer className="footer">
    <div className="footer__container">
      <div className="footer__links">
        <h1 className="footer__logo">audiophile</h1>
        <ul className='links'>
          <li >
            <Link to="/">HOME</Link>
          </li>
          <li >
            <Link to="/headphones">HEADPHONES</Link>
          </li>
          <li >
            <Link to="/speakers">SPEAKERS</Link>
          </li>
          <li >
            <Link to="/earphones">EARPHONES</Link>
          </li>
        </ul>
      </div>
      <div className="footer__content">
        <p>
          Audiophile is an all in one stop to fulfill your audio needs. We are a small team of music lovers 
          and sound specialists who are devoted to helping you get the most out of personal audio. Come and 
          visit our demo facility - we are open 7 days a week.
        </p>
        <ul className='icons'>
          <li><a href="#"><FaFacebook /></a></li>
          <li><a href="#"><FaXTwitter/></a></li>
          <li><a href="#"><FaInstagram /></a></li>
        </ul>
        <p>Copyright @ 2021. All Rights Reserved.</p>
      </div>
      
    </div>
  </footer>
    
  )
}

export default Footer