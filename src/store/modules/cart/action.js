import { ADD_CART, RMV_CART } from "./actionsTypes";
export const addcart = (product) => ({
  type: ADD_CART,
  product,
});

export const removecart = (list) => ({
  type: RMV_CART,
  list,
});
