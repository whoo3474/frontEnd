import * as types from '../types';

const initialState = {
  cartItems:[]
}

export default function cart(state = initialState, action) {
  switch(action.type) {
    case types.ADD_TO_CART:
      if(state.cartItems.indexOf(action.item) < 0) {
        state.cartItems.push(action.item);
        const newArray = [ ...state.cartItems ];
        return { ...state, cartItems: newArray };
      }
      return state;
    default:
      return state;
  }
}