import { CartProvider } from './Context/CartContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EarphonesPage from './Pages/Categorypages/EarphonesPage';
import Checkout from './Pages/Checkout/Checkout';
import Home from './Pages/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css'
import HeadphonesPage from './Pages/Categorypages/HeadphonesPage';
import SpeakersPage from './Pages/Categorypages/SpeakersPage';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
//import CategoryPage from './Pages/Categorypages/CategoryPage';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/headphones" element={<HeadphonesPage />} />
          <Route path="/speakers" element={<SpeakersPage/>} />
          <Route path="/earphones" element={<EarphonesPage />} />
          <Route path="/product/:slug" element={<ProductDetails/>} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer/>
      </Router>
    </CartProvider>
  )
}

export default App