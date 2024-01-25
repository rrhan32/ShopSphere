import React ,{useState} from 'react'
import {useSelector} from 'react-redux';
import StripeCheckout from 'react-stripe-checkout'

function Payment() {
  const cartData=useSelector(state=>state.Cart);
  const [product,setProduct]=useState({
        name:"react from FB",
        price:cartData.total_price,
        productBy:"facebook",
    });
    
    const makePayment=async(token)=>{
      const body={
        token,
        product,
      }
      const headers={
        "Content-Type":"application/json"
      }
      return fetch("http://localhost:8282/payment",{
        method:"POST",
        body:JSON.stringify(body),
        headers}).then(response=>{
          console.log("RESPONSE",response);
          const {status}=response;
          console.log("status",status);
        }).catch(err=>
          {
            console.log(err);
          })
      
    }
  return (
    <>
       <div>Stripe Checkout</div>
       <StripeCheckout stripeKey="pk_test_51OQlFdSFGlYRgejUKJxszlON4s7KKvC05DcjFkk5TBcqtZpG2XlSWpYibDVMRpDbzSTpxMpxMyNawH343qH3PoWU00vzbqK7Zi" token={makePayment} name='Buy React' amount={product.price*100}/>
    </>

  )
}

export default Payment