import { product_list } from "./types";
import { product_list_success } from "./types";
import { product_list_failure } from "./types";
import { v4 as uuidv4 } from 'uuid';
const initialState={
    loading:false,
    products:[],
    error:"",
}
const Product_reducer=(state=initialState,action)=>{
    switch(action.type){
        case product_list:
            return{
                ...state,
                loading: true,

            };
        case product_list_success:
            const productsWithIds = action.payload.map(product => ({
                ...product,
                id: uuidv4(), // Generate a unique ID for each entry
            }));
            return{
                ...state,
                loading: false,
                products: productsWithIds,
                error:''

            };
            case product_list_failure:
                return{
                    ...state,
                    loading: false,
                    product:[],
                    error:action.payload,
                }
            default: return state;
    }
}
export default Product_reducer;