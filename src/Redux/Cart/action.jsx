import { ADD_TO_CART } from "./types";
import { REMOVE_FROM_CART } from "./types";
export const add_to_cart=(variable)=>{

    return{
        type:ADD_TO_CART,
        // item:variable.title,
        price:variable.price,
        item:variable.title,
        
    }
}
export const remove_from_cart=(variable)=>{

    return{
        type:REMOVE_FROM_CART,
        // item:variable.title,
        // price:variable.price,
        item:variable,
        
    }
}
