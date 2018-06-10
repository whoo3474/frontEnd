import * as types from '../types';

const initialState = {
  cartItems:[]
}

function cart(state = initialState, action) {
  switch(action.type) {
    case types.ADD_CART:
    let newCartItems = [ ...state.cartItems ];
    newCartItems.push(Math.random()*100%10);
    return {...state, cartItems:newCartItems};
    default:
    return state;
  }
}

export default cart;