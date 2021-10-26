import { useState } from "react";
import Banner from "../../components/Banner";
import Footer from "../../components/footer";
import Header from "../../components/Header";
import Menupage from "../../components/Menu";
import ProductList from "../../components/ProductList";

const HomePage = () => {
  const [cartQt,setCartQt]=useState(0)
  return (
    <>
      <div>
        <Header cartQt={cartQt} setCartQt={setCartQt}/>
        <Menupage />
       <Banner/>
        <ProductList setCartQt={setCartQt} />
        <Footer />
      </div>
    </>
  );
};
export default HomePage;
