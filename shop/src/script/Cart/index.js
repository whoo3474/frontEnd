import React, { Component } from 'react';
import Item from './item';
import items from '../../api/items';

class Cart extends Component {
    constructor(props){
        super(props);
        // super는 React 내부의 Component 클래스의 생성자를 호출한다.
    }
    render (){
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
                        <Item item={items[0]} />
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Cart;
