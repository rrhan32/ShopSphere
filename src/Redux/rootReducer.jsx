import { combineReducers } from "redux";
import Product_reducer from "./Products/reducer";
import add_to_cart_reducer from "./Cart/reducer";

const rootReducer = combineReducers({
  Product: Product_reducer,
  Cart: add_to_cart_reducer,
});
export default rootReducer;
