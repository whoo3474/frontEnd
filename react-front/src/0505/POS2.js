import React, {Component} from 'react';

const styles = {
    container:{
        width:800,
        margin:'auto',
        marginTop:20,
        paddingLeft:20,
        display:'flex',
        justifyContent:'space-between'
    },
    label:{
        width:100
    },
    input:{
        width:200,
        height:48
    }
}


class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number:this.props.number,
            count:0,
            price:0,
            totalPrice:0,
        }
    }
    shouldComponentUpdate(newProps, newState) {
        if(this.props.number === newProps.number && 
            this.props.addTotalPrice === newProps.addTotalPrice)
            return false;    
    }
    handleChangeCount = (evt) => {
        this.setState({count:evt.target.value, totalPrice:evt.target.value * this.state.price})
        this.props.addTotalPrice(evt.target.value * this.state.price);
    }
    handleChangePrice = (evt) => {
        this.setState({price:evt.target.value, totalPrice:evt.target.value * this.state.count})
        this.props.addTotalPrice(evt.target.value * this.state.count);
    }
    render() {
        const {
            number,
            count,
            price,
            totalPrice
        } = this.state;

        return (
            <div style={styles.container}>
                <span>{number}</span>
                <div>
                    <label>개수</label>
                    <input style={styles.input} type="number" onBlur={this.handleChangeCount} />
                    <label>금액</label>
                    <input style={styles.input} type="number" onBlur={this.handleChangePrice} />
                </div>
                <span>₩{totalPrice}원</span>
            </div>
        )
    }
}

class POS extends Component {
    state = {
        totalPrice:0
    }
    addTotalPrice = (price) => {
        console.log(price)
        this.setState({totalPrice:Number(this.state.totalPrice) + Number(price)})
    }
    render() {
        console.log('render')
        return (
            <div style={{width:800}}>
                <Item number={1} addTotalPrice={this.addTotalPrice}/>
                <Item number={2} addTotalPrice={this.addTotalPrice}/>
                <Item number={3} addTotalPrice={this.addTotalPrice}/>
                <Item number={4} addTotalPrice={this.addTotalPrice}/>
                <h1 style={{textAlign:'right'}}>총액 : {this.state.totalPrice} 원</h1>
            </div>
        )
    }
}

export default POS;