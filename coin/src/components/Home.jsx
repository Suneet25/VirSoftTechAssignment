import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import Cart from "./Cart";
import { getProducts } from "../Redux/Product/product.action";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../Redux/Cart/cart.action";
const Home = () => {


  let dispatch=useDispatch();
  let {products}=useSelector(store=>store.productManager);
  let {cart}=useSelector(store=>store.cartManager);

  //getProducts
  let getProduct =  () => {
dispatch(getProducts())
  };

  //getCarts
  let getCarts = async () => {
   dispatch(getCart())
  };








  useEffect(() => {
    getProduct();
  }, []);

  useEffect(() => {
    getCarts();
  }, []);
  return (
    <div>
      <h1>COINS</h1>
    
      <div>
    
<Card products={products}/>
        <br />
        <h2>CART</h2>
       <Cart cart={cart}/>
      </div>
    </div>
  );
};

export default Home;
