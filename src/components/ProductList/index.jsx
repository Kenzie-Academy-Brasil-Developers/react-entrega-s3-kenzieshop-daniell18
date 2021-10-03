import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import { addcartThunk } from "../../store/modules/cart/thunk";

const ProductList = ({ type }) => {
  const useStyles = makeStyles((theme) => ({
    img: {
      width: "100px",
    },
    title: {
      width: "250px",
    },
    list: {
      listStyleType: "none",
      padding: "0px",
      marginTop: "10px",
      margin: "0px",
      gap: "20px",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
    },
    item: {
      padding: "10px",
      gap: "10px",

      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
    },
    price: {
      display: "flex",
      gap: "5px",
    },
    p: {
      margin: "0px",
    },
    Modal: {
      width: "100px",
      height: "20px",
      color: "white",
      backgroundColor: "white",
    },
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      "&:hover": {
        color: "blue",
        boxShadow: "0 0 5px black",
      },
      padding: "10px",
    },
    button: {
      backgroundColor: "lime",
      borderRadius: "10px",
    },
    root: {
      display: "flex",
    },
  }));
  const classe = useStyles();
  const product = useSelector((state) => state.products);
  const filter = useSelector((state) => state.filter);

  const dispatch = useDispatch();
  const handleClick = (product) => {
    dispatch(addcartThunk(product));
  };

  return (
    <div className={classe.root}>
      {filter[0] ? (
        filter.map((product, index) => (
          <div className={classe.container}>
            <li className={classe.item} key={index}>
              <img
                className={classe.img}
                src={product.img}
                alt={product.name}
              />
              <div className={classe.title}>{product.name}</div>
              <div>{product.installment} 10x no cartão</div>
              <div className={classe.price}>
                <p className={classe.p}>ou</p>
                <div> {product.price} </div>
                <p className={classe.p}>á vista</p>
              </div>
            </li>
            <Button
              onClick={() => handleClick(product)}
              className={classe.button}
              variant="contained"
            >
              Adicionar ao Carinho
            </Button>
          </div>
        ))
      ) : type ? (
        <ul className={classe.list}>
          {product.map(
            (product, index) =>
              product.type === type && (
                <div className={classe.container}>
                  <li className={classe.item} key={index}>
                    <img
                      className={classe.img}
                      src={product.img}
                      alt={product.name}
                    />
                    <div className={classe.title}>{product.name}</div>
                    <div>{product.installment} 10x no cartão</div>
                    <div className={classe.price}>
                      <p className={classe.p}>ou</p>
                      <div> {product.price} </div>
                      <p className={classe.p}>á vista</p>
                    </div>
                  </li>
                  <Button
                    onClick={() => handleClick(product)}
                    className={classe.button}
                    variant="contained"
                  >
                    Adicionar ao Carinho
                  </Button>
                </div>
              )
          )}
        </ul>
      ) : (
        <ul className={classe.list}>
          {product.map((product, index) => (
            <div className={classe.container}>
              <li className={classe.item} key={index}>
                <img
                  className={classe.img}
                  src={product.img}
                  alt={product.name}
                />
                <div className={classe.title}>{product.name}</div>
                <div>{product.installment} 10x no cartão</div>
                <div className={classe.price}>
                  <p className={classe.p}>ou</p>
                  <div> {product.price} </div>
                  <p className={classe.p}>á vista</p>
                </div>
              </li>
              <Button
                onClick={() => handleClick(product)}
                className={classe.button}
                variant="contained"
              >
                Adicionar ao Carinho
              </Button>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};
export default ProductList;
