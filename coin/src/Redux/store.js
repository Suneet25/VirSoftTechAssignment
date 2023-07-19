import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import {productReducer} from "./Product/product.reducer";
import { cartReducer } from "./Cart/cart.reducer";

//Redux-persist helps to keep the store and states in the local storage

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

let rootReducer = combineReducers({
  productManager: productReducer,
  cartManager: cartReducer,
});

let persistConfig = {
  key: "root",
  storage,
};

let persistedReducer = persistReducer(persistConfig, rootReducer);

let store = legacy_createStore(persistedReducer, applyMiddleware(thunk));
let persistedStore = persistStore(store);

export { store, persistedStore };
