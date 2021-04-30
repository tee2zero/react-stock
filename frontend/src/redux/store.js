/* eslint-disable no-mixed-operators */
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

// หากต้องการเก็บข้อมูล state ลง localstorage -----------------------
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunk];
const composeEnhancers =
  (typeof window != "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
// export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)))

let store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(...middleware))
);
let persistor = persistStore(store);
export { store, persistor };
