import { ADD_CART, RMV_CART } from "./actionsTypes";
const cartReducer = (
  state = JSON.parse(localStorage.getItem("cart")) || [],
  action
) => {
  switch (action.type) {
    case ADD_CART:
      const { product } = action;
    let aux=state.find((item)=>item.id===product.id)
 
    if(aux){
      state.forEach(element => {
        if(element.id===aux.id){
          element.quantity+=1
        }
      });
    }else{
      product.quantity+=1
      state=[...state,product]
    }
    localStorage.setItem("cart", JSON.stringify(state));
    return state
      
    case RMV_CART:
      const { list } = action;
      localStorage.setItem("cart", JSON.stringify(list));
      return list;
    default:
      return state;
  }
};
export default cartReducer;
