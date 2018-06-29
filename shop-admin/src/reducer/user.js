import * as types from "../types";

const initialState = {
  users:[]
}

export default function user(state=initialState, action) {
  switch(action.type) {
    case types.GET_USER:
      return {...state, users:action.users}
    default:
      return state;
  }
}