import React, {Component} from 'react';

class Item extends Component{
    render(){
        const {item} = this.props;

        return(
            <tr>
                <td>
                    <img alt={item.name} src={item.photoURL} />
                    <h4>
                        {item.name}
                    </h4>
                </td>
                <td>
                    {item.price}
                </td>
                <td>
                    {item.inventory}
                </td>
            </tr>


        );
    }
}

export default Item;