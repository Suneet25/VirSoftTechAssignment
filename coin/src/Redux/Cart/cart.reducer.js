import {
ADD_CART_LOADING,
  ADD_CART_ERROR,
  ADD_CART_SUCCESS,
  GET_CART_ERROR,
  GET_CART_LOADING,
  GET_CART_SUCCESS,
} from "./cart.actionType";

let initData = {
  cart: [],
  loading: false,
  error: false,
};

export let cartReducer = (state = initData, { type, payload }) => {
  switch (type) {
    case GET_CART_ERROR: {
      return {
        ...state,
        error: true,
        loading: false,
      };
    }
    case GET_CART_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        cart: payload,
      };
    }
    case GET_CART_LOADING: {
      return {
        ...state,
        error: false,
        loading: true,
      };
    }

    case ADD_CART_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case ADD_CART_ERROR: {
      return {
        ...state,
        error: true,
        loading: false,
      };
    }
    case ADD_CART_SUCCESS: {
        let itemIsPresent=state.cart.find((el)=>{
           return el.uniqueId===payload.uniqueId
        })
console.log("itemIsPresent",itemIsPresent)

        let newCart;
if(itemIsPresent){
newCart=state.cart.map((prod)=>{
        if(prod.uniqueId===payload.uniqueId){
return {...prod,qty:prod.qty+(payload.qty)}
        }else{
            return prod
        }
    })
}else{
    newCart=[...state.cart,payload]
}

      return {
        ...state,
        error: false,
        loading: false,
        cart: newCart,
      };
    }

   
    default: {
      return state;
    }
  }
};
