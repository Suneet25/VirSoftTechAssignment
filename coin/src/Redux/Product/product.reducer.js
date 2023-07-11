import { GET_PRODUCT_ERROR,GET_PRODUCTS_SUCCESS,GET_PRODUCT_LOADING } from "./product.actionType";


let initData={
products:[],
loading:false,
error:false
}

export let productReducer=(state=initData,{type,payload})=>{

switch(type) {


    case GET_PRODUCT_ERROR
  :{
    return {
        ...state,
        error:true,
        loading:false
    }
  }  case GET_PRODUCTS_SUCCESS:{
    return {
        ...state,
        loading:false,
        error:false,
        products:payload
    }
  }
    case GET_PRODUCT_LOADING :{
        return {
            ...state,
            error:false,
            loading:true

        }
    }



    default:{
        return state
    }
}

}