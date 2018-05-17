import React, {Component} from 'react';
import Counter from './counter'

class Item extends Component{
    state = {
        count:1
    }

    minusCount = () => {
        console.log(this.state.count);
        if(this.state.count > 1)
             this.setState({count:this.state.count - 1});
    }

    plusCount = () =>{
        console.log(this.state.count);
        if(this.props.item.inventory > this.state.count)
            this.setState({count:this.state.count + 1});
    }

    changeCount = (count) => {
        if(count.length == 0 ){
            return;
        }
        let intCount = parseInt(count);
        this.setState({count:intCount});
    }

    render(){
        const {item} = this.props;
        const {count} = this.state;

        return(
            <tr>
                <td>
                    <img src={item.photoURL} />
                    <h4>
                        {item.name}
                    </h4>
                </td>
                <td>
                    {item.price}
                </td>
                <td>
                    <Counter 
                        count={count} 
                        add   = {this.plusCount}
                        minus = {this.minusCount}
                        change = {this.changeCount}/>
                </td>
                <td>
                    {item.price * count}
                </td>
            </tr>


        );
    }
}

export default Item;