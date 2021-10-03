import { ADD_CART, RMV_CART } from "./actionsTypes";
const cartReducer = (
  state = JSON.parse(localStorage.getItem("cart")) || [],
  action
) => {
  switch (action.type) {
    case ADD_CART:
      const { product } = action;

      return [...state, product];
    case RMV_CART:
      const { list } = action;

      return list;
    default:
      return state;
  }
};
export default cartReducer;
