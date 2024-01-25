import React from 'react'
import { useLocation } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { add_to_cart } from '../Redux'
import { Link } from 'react-router-dom'


function Product(props) {
    const location = useLocation()
    const {info} = location.state;
    const dispatch=useDispatch();
  // console.log("prod",produce_api)
    const onCardClick=(info)=>{
    // console.log(info.info);
    return dispatch(add_to_cart(info.info))
  }
  
  return (
    <>
    {info?(
        <div className='Product'>
        <h2>{info.title}</h2>
        <img src={info.image} alt={info.title} />
        <div>{info.description}</div>
        <Link to="/checkout">
        <button onClick={()=>onCardClick({info})}>BUY NOW</button>
        </Link>
        </div>):
    (
        <h1>Add something to your Card First</h1>
    )
    }
    </>
  )
}

export default Product