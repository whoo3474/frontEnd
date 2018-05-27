import React, { Component } from 'react';
import Item from './item';
import Form from './form';
import {getItems} from '../../api/items';

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
                <Form />
                <table>
                    <thead>
                        <tr>
                            <th>상품 정보</th>
                            <th>단가</th>
                            <th>재고</th>
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

export default Cart;
