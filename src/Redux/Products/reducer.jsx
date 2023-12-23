import { product_list } from "./types";
import { product_list_success } from "./types";
import { product_list_failure } from "./types";
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
            return{
                ...state,
                loading: false,
                products: action.payload,
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