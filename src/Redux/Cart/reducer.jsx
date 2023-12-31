import { ADD_TO_CART } from "./types";
import { REMOVE_FROM_CART } from "./types";
const initialState={
    total_items:0,
    // items:[],
    total_price:0,
    item_type:[],

}
const add_to_cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        state.item_type.push(action.item)
        return {
          ...state,
          //items: [...state.items, action.item], // Create a new array with the updated items
          total_price:state.total_price+action.price,
          total_items: state.total_items + 1, // Calculate total_items based on the new length
          
        };
      case REMOVE_FROM_CART:
        return {

          ...state,
          item_type: state.item_type.filter(item => item !== action.item), // Create a new array with the item removed
          total_items: state.total_items - 1,
          //items: [...state.items, action.item], // Create a new array with the updated items
          // total_price:state.total_price-action.price,
          // Calculate total_items based on the new length
          
        };
      default:
        return state;
    }
  };
  
export default add_to_cartReducer;