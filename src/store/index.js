import { applyMiddleware, combineReducers, createStore } from "redux";
import cartReducer from "./modules/cart/recuder";
import productsReducer from "./modules/products/reducer";
import filterreducer from "./modules/search/reducer";
import thunk from "redux-thunk";
const reducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  filter: filterreducer,
});

const store = createStore(reducer, applyMiddleware(thunk));
export default store;
