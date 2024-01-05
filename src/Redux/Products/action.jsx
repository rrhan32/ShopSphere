import {product_list} from "./types"
import { product_list_success } from "./types";
import { product_list_failure } from "./types";
import axios from 'axios'
export const product_list_Request=()=>{
    return{
    type: product_list,
    }
}
export const product_list_Success=(products)=>{
    return{
    type: product_list_success,
    payload:products,
    }
}
export const product_list_Failure=(error)=>{
    return{
    type: product_list_failure,
    payload:error,
    }
}
export const fetchProducts = (input) => {
    return (dispatch) => {
        dispatch(product_list_Request()); // Invoke the action creator to dispatch the action object
        console.log("input is",input);
        const url= !input ? "https://fakestoreapi.com/products":`https://fakestoreapi.com/products/category/${input}`;
        axios.get(url)
            .then((response) =>
            { 
                
                if (response.data.length===0) dispatch(product_list_Failure("invalid input"))
                else dispatch(product_list_Success(response.data))
            })
            .catch((e) => {
                dispatch(product_list_Failure(e.message))
            });
    };
};


