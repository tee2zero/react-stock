import { combineReducers } from "redux";
import ProductReducer from "./productReducer";
import CartReducer from "./cartReducer";

const rootReducer = combineReducers({
  productReducer: ProductReducer,
  cartReducer: CartReducer,
});

export default rootReducer;
