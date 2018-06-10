import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ActionCreator from '../action';

const Cart = (props) => {
  let cartElements = props.cartItems.map((item, index) => {
    return <li key={index}>{item}</li>
  })
  return (
    <div>
      <h2>Cart</h2>
      <button onClick={()=>props.addCart()}>ADD TO CART</button>
      <ul>
        {cartElements}
      </ul>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    cartItems:state.cart.cartItems
  }
}
const  mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ActionCreator, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
//HOC higher order component