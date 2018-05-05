import React, {Component} from 'react';

const styles = {
    container:{
        width:400,
        margin:'auto',
        marginTop:200
    },
    input:{
        width:'100%',
        height:24
    }
}
class POS extends Component {
    userTotalPrice = 100000;
    state = {
        count:0,
        price:0,
        totalPrice:0,
    }
    handleChangeCount = (evt) => {
        this.setState({count:evt.target.value, totalPrice:evt.target.value * this.state.price})
    }
    handleChangePrice = (evt) => {
        this.setState({price:evt.target.value, totalPrice:evt.target.value * this.state.count})
    }
    componentDidUpdate() {
        this.userTotalPrice += this.state.totalPrice;
        console.log(this.userTotalPrice);
    }
    render() {
        const {
            count,
            price,
            totalPrice
        } = this.state;

        return (
            <div style={styles.container}>
                <label>개수</label>
                <input style={styles.input} type="number" value={count} onChange={this.handleChangeCount} />
                <label>금액</label>
                <input style={styles.input} type="number" value={price} onChange={this.handleChangePrice} />
                <h1>총액 : {totalPrice}</h1>
            </div>
        )
    }
}

export default POS;