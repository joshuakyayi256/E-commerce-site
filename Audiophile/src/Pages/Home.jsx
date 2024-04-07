import Hero from "../components/Hero/Hero"
import Category from "../components/categories/Category"
import Product from "../components/Products/Product";
import About from "../components/About/About"

const Home = () => {

  return (
    <div>
      <Hero/>
      <Category/>
      <Product/>
      <About/>
    </div>
  )
}

export default Home