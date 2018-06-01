import React, {Component} from 'react';

class Counter extends Component {
    render() {

        const {
            count,
            add,
            minus,
            change
        } = this.props;


        return(
            <div>
                <button onClick={minus}>-</button>
                <input type="text" onChange={(evt)=>change(evt.target.value)} value={count}/>
                <button onClick={add}>+</button>
            </div>
        )
    }
}
// 숫자가 1 이상이여야 한다
// 최대값도 재고값 inventory 값


export default Counter;