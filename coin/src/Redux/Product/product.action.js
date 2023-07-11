import { GET_PRODUCT_ERROR,GET_PRODUCTS_SUCCESS,GET_PRODUCT_LOADING } from "./product.actionType";

import axios from "axios";
//getProducts

export let getProducts=()=>async(dispatch)=>{
dispatch({type:GET_PRODUCT_LOADING});
try {
    let res=await axios.get("https://blogapi-onq7.onrender.com/product");
    dispatch({type:GET_PRODUCTS_SUCCESS,payload:res.data})
} catch (error) {
    console.log(error);
    dispatch({type:GET_PRODUCT_ERROR})
}
}

