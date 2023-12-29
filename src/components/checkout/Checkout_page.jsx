// import * as React from 'react';
// import { Component } from 'react';
// import './checkout_page.css'
import "../../App.css"

// const  Checkout_=()=>
//      {
//       return (
//         <div className="app-container">
//           <div className="row">
//             <div className="col">
//               <Item
//                 name="Instax Mini 90 Neo Classic"
//                 price="$144.99"
//                 img="http://ecx.images-amazon.com/images/I/61%2BABMMN5zL._SL1500_.jpg"
//               />
//             </div>
//             <div className="col no-gutters">
//               <Checkout />
//             </div>
//           </div>
//         </div>
//       );
//     }

  
//   const Item = (porps:any) => (
//     <div className="item-container">
//       <div className="item-image">
//         <img src={porps.img} />
//         <div className="item-details">
//           <h3 className="item-name"> {porps.name} </h3>
//           <h2 className="item-price"> {porps.price} </h2>
//         </div>
//       </div>
//     </div>
//   );
  
//   const Checkout = (porps:any) => (
//     <div className="checkout">
//       <div className="checkout-container">
//         <h3 className="heading-3">Credit card checkout</h3>
//         <Input label="Cardholder's Name" type="text" name="name" />
//         <Input
//           label="Card Number"
//           type="number"
//           name="card_number"
//           imgSrc="https://seeklogo.com/images/V/visa-logo-6F4057663D-seeklogo.com.png"
//         />
//         <div className="row">
//           <div className="col">
//             <Input label="Expiration Date" type="month" name="exp_date" />
//           </div>
//           <div className="col">
//             <Input label="CVV" type="number" name="cvv" />
//           </div>
//         </div>
//         <Button text="Place order" />
//       </div>
//     </div>
//   );
  
//   const Input = (porps:any) => (
//     <div className="input">
//       <label>{porps.label}</label>
//       <div className="input-field">
//         <input type={porps.type} name={porps.name} />
//         <img src={porps.imgSrc} />
//       </div>
//     </div>
//   );
  
//   const Button = (porps:any) => (
//     <button className="checkout-btn" type="button">
//       {porps.text}
//     </button>
//   );
// export default Checkout_;
import React from 'react'
import {useSelector} from 'react-redux';
import Payment from "../Payment_gateway";

function CheckoutPage() {
  const cartData=useSelector(state=>state.Cart);
  console.log("cartData",cartData)
  return (
    <>    
    <h1>CHECKOUT PAGE</h1>
    <h2>TOTAL ITEMS : {cartData.total_items}</h2>
    <h2>TOTAL AMOUNT : {cartData.total_price}</h2>
    <h3>YOUR ITEMS </h3>
    <ul>{cartData.item_type.length===0?(
      <li>EMPTY CART</li>)
      :cartData.item_type.map((item)=><li>{item}</li>)}</ul>
    <Payment><button>Pay</button></Payment>
    </>

  )
}

export default CheckoutPage
