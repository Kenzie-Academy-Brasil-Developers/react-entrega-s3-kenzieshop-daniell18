import { Button, SwipeableDrawer } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useState } from "react";

import Carticon from "../../assets/icone-cart.png";
import { AiTwotoneDelete } from "@react-icons/all-files/ai/AiTwotoneDelete";
import { useDispatch } from "react-redux";
import { removecartThunk } from "../../store/modules/cart/thunk";
const Cart = () => {
  const [open, setOpen] = useState(false);
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexDirection: "column",
    },
    iconCart: {
      height: "30px",
    },
    img: {
      width: "100px",
    },
    item: {
      display: "flex",
      gap: "5px",
      padding: "5px",
      flexDirection: "row",
      margin: "10px",
      border: "2px solid blue",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      width: "100px",
      textAlign: "center",
    },
    price: {
      fontWeight: "bold",
    },
    txt: {
      display: "flex",
      justifyContent: "center",
    },
  }));

  const classe = useStyles();
  const dispatch = useDispatch();
  const list = JSON.parse(localStorage.getItem("cart")) || [];
  const handleClick = (id) => {
    dispatch(removecartThunk(id));
    setOpen(false);
  };
  console.log(list);
  return (
    <>
      <img
        id="teste"
        onClick={() => setOpen(true)}
        className={classe.iconCart}
        src={Carticon}
        alt=""
      />
      <SwipeableDrawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        className={classe.drawer}
      >
        <div>
          <h3 className={classe.txt}>Meu carrinho</h3>
          <h4 className={classe.txt}>
            Total :
            <div>
              {list[0]
                ? list
                    .reduce((acc, valorT) => {
                      return acc + valorT.price;
                    }, 0)
                    .toFixed(2)
                : 0}
            </div>
          </h4>
        </div>
        {list.map((product, index) => (
          <li className={classe.item} key={index}>
            <img className={classe.img} src={product.img} alt={product.name} />
            <div className={classe.title}>{product.name}</div>
            <div className={classe.price}>{product.price}</div>
            <Button
              onClick={() => handleClick(product.id)}
              startIcon={<AiTwotoneDelete />}
            ></Button>
          </li>
        ))}
      </SwipeableDrawer>
    </>
  );
};
export default Cart;
