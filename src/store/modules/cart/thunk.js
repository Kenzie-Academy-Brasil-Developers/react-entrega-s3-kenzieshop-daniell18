import { addcart, removecart } from "./action";

export const addcartThunk = (product) => {
  return (dispatch, getStore) => {
    const list = JSON.parse(localStorage.getItem("cart")) || [];

    list.push(product);

    localStorage.setItem("cart", JSON.stringify(list));
    dispatch(addcart(product));
  };
};
export const removecartThunk = (id) => {
  return (dispatch, getStore) => {
    const { cart } = getStore();
    const list = cart.filter((product) => product.id !== id);
    localStorage.setItem("cart", JSON.stringify(list));
    dispatch(removecart(list));
  };
};
