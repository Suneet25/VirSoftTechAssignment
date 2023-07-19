import {
 
  ADD_CART_LOADING,
  ADD_CART_ERROR,
  ADD_CART_SUCCESS,
  GET_CART_ERROR,
  GET_CART_LOADING,
  GET_CART_SUCCESS,
} from "./cart.actionType";

import axios from "axios";
//getCart

export let getCart = () => async (dispatch) => {
  dispatch({ type: GET_CART_LOADING });
  try {
    let res = await axios.get("http://localhost:8000/cart");
    dispatch({ type: GET_CART_SUCCESS, payload: res.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: GET_CART_ERROR });
  }
};

//addToCart

export let addCart = (data) => async (dispatch) => {
  dispatch({ type: ADD_CART_LOADING });
  try {
    dispatch({ type: ADD_CART_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: ADD_CART_ERROR });
  }
};

//updateToCart

// export let updateCart = (id, data) => async (dispatch) => {
//   dispatch({ type: UPDATE_CART_LOADING });
//   try {
//     let res = await axios.patch(
//       `https://blogapi-onq7.onrender.com/cart/${id}`,
//       data
//     );
//     dispatch({ type: UPDATE_CART_SUCCESS, payload: { id, data } });
//   } catch (error) {
//     console.log(error);
//     dispatch({ type: UPDATE_CART_ERROR });
//   }
// };
