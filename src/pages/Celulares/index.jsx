import { makeStyles } from "@material-ui/styles";
import Footer from "../../components/footer";
import Header from "../../components/Header";
import Menupage from "../../components/Menu";
import ProductList from "../../components/ProductList";

const Celulares = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      height: "100vh",
      justifyContent: "space-between",
      flexDirection: "column",
    },
  }));
  const classe = useStyles();
  return (
    <div className={classe.root}>
      <div>
        <Header />
        <Menupage />
      </div>
      <ProductList type="celular" />
      <Footer />
    </div>
  );
};
export default Celulares;
