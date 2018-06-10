import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from './item';
import {getItems} from '../../api/cart';
import './index.css';

class Cart extends Component {
    constructor(props){
        super(props);
        // super는 React 내부의 Component 클래스의 생성자를 호출한다.
        this.state = {
            itemList:[]
        }
    }
    componentDidMount() {
        getItems().then(items => {
            this.setState({itemList : items})
        });
    }
    render () {
        // this.state.itemList
        const {itemList} = this.state;

        var cartItems = itemList.map((i) => {
            return <Item key={i.id} item={i} />
        })

        return(
            <div className="cart">
                <table>
                    <thead>
                        <tr>
                            <th>상품 정보</th>
                            <th>단가</th>
                            <th>수량</th>
                            <th>주문금액</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default connect((state) => {
    return {
    cartCount:state.cart.cartItems
}})(Cart);
