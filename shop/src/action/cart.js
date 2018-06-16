import * as types from '../types';

export function addToCart(itemId) {
  return {
    type:types.ADD_TO_CART,
    item:itemId
  }
}
