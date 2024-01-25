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
        // state.item_type.push({action.item})
        const ExistingItem=state.item_type.find(item=>item.title===action.item.title);
        if (ExistingItem) {
          // If the item already exists, update its quantity instead of adding a new one
          ExistingItem.quantity += 1;
          return {
            ...state,
            total_price: state.total_price + action.price,
            total_items: state.total_items + 1,
          };
        } else {
          // If the item is not in the cart, add it with a unique ID
          return {
            ...state,
            item_type: [...state.item_type, { ...action.item, quantity: 1 }],
            total_price: state.total_price + action.price,
            total_items: state.total_items + 1,
          };
        };
      case REMOVE_FROM_CART:
        const Del_item=state.item_type.find(item=>item.title===action.item.title);
        if (Del_item.quantity>1)
        {
          Del_item.quantity-=1;
          return{
            ...state,
            total_price: state.total_price - action.price,
            total_items: state.total_items - 1,

          }

        }
        else{
          return{
            ...state,
            item_type: state.item_type.filter(item => item.id !== action.item.id), // Create a new array with the item removed
            total_items: state.total_items - 1,
            total_price: state.total_price - action.price,
          }

        };

      default:
        return state;
    }
  };
  
export default add_to_cartReducer;