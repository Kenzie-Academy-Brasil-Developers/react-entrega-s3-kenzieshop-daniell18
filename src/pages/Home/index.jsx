import Banner from "../../components/Banner";
import Footer from "../../components/footer";
import Header from "../../components/Header";
import Menupage from "../../components/Menu";
import ProductList from "../../components/ProductList";

const HomePage = () => {
  return (
    <>
      <div>
        <Header />
        <Menupage />
        <Banner />
        <ProductList />
        <Footer />
      </div>
    </>
  );
};
export default HomePage;
