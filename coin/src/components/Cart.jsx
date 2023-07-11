import axios from 'axios';
import React from 'react'

import { getCart } from '../Redux/Cart/cart.action';

const Cart = ({cart}) => {


    

      let sum=cart?.reduce((acc,el)=>{
        let quantity=+(el.qty);
        let price=+(el.price);
        return acc+(price*quantity)
      },0);
   
      
      

  return (
    <div>
         <div
          style={{
            height: "500px",
            width: "98%",
            border: "2px solid gray",
            padding: "10px",
          }}
        >
          {cart?.map((el) => (
            <div key={el?.uniqueId} style={{ display: "flex", gap: "20px" }}>
              <h4>{el?.uniqueId}</h4>
              <h4>Name:-{el?.name}</h4>
              <h4>Qty:-{el?.qty}</h4>
              <h4>Price:-$ {el?.price * el?.qty}</h4>
        
            </div>
          ))}
          <button>Total Price:-$ {sum}</button>
        </div>
    </div>
  )
}

export default Cart