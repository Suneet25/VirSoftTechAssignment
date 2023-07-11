import {applyMiddleware,combineReducers,legacy_createStore} from "redux"
import thunk from "redux-thunk"
import { productReducer } from "./Product/product.reducer";
import { cartReducer } from "./Cart/cart.reducer";

let rootReducer=combineReducers({
    productManager:productReducer,cartManager:cartReducer
})

export let store=legacy_createStore(rootReducer,applyMiddleware(thunk));