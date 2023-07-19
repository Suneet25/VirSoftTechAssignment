import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart, getCart  } from "../Redux/Cart/cart.action";

const Card = ({ products }) => {
  let [qty, setQty] = useState(null);
  let { cart } = useSelector((store) => store.cartManager);
  let dispatch = useDispatch();
  console.log("add", cart);
  //addToCart

  let addToCart = (product) => {
    let cartAdd = { ...product, qty: +qty };
    dispatch(addCart(cartAdd));
   

  };

  return (
    <div style={{ display: "flex", gap: "30px" }}>
      {products?.map((product) => (
        <div
          key={product?.uniqueId}
          style={{
            height: "300px",
            width: "300px",
            border: "2px solid gray",
            padding: "10px",
            paddingTop: "20px",
          }}
        >
          <img
            src={product?.image}
            alt={product?.name}
            style={{ borderRadius: "50%", height: "100px", width: "100px" }}
          />
          <h3>{product?.name}</h3>
          <p>$ {product?.price}</p>
          <input
            type="number"
            placeholder="Qty"
            onChange={(e) => setQty(e.target.value)}
          />
          <button onClick={() => addToCart(product)}>ADD</button>
        </div>
      ))}
    </div>
  );
};

export default Card;
