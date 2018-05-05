import React, { Component } from 'react';

// Arrow Function
function add(a, b) {
    return a + b;
}
// this binding됨
var add1 = function(a,b) {
    return a + b;
}
// this binding 안됨
var add2 = (a, b) => {
    return a + b;
}

// this
// this.minusNumber.bind(this)
// () => this.minusNumber();

var obj = {
    num1:0,
    num2:2
}
// console.log(obj);
obj.num1 = 1;
// console.log(obj);

// es5 Object.assign
obj = Object.assign(obj, {num2:5});
// es6 spread operator
obj = {...obj, num2:5}
// obj = { num1:1, num2:2, num2:5}
// console.log(obj);


class Counter extends Component {
    state = {
        number:0,
        obj:{
            num1:0, num2:2
        }
    }
    constructor(props){
        super(props);
        this.minusNumber = this.minusNumber.bind(this);
    }
    minusNumber() {
        this.setState({number:this.state.number - 1})
        // this.setState : state를 업데이트
    }
    plusNumber = () => {
        this.setState({number:this.state.number + 1})
    }
    setObj = () => {
        // this.state.obj.num1 = 5;
        this.setState({obj:{...obj, num1:5}})
    }
    render() {
        return (
            <div style={{fontSize:36}}>
                {/* - 버튼을 누르면 1 감소하고 */}
                {/* + 버튼을 누르면 1 증가하고 */}
                {/* 최초값은 0 */}
                <button onClick={this.minusNumber}>-</button>
                <span>{this.state.number}</span>
                <button onClick={this.plusNumber}>+</button>
            </div>
        )
    }
}

export default Counter;