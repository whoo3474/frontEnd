import React, {Component} from 'react';

import ItemCard from '../ItemCard';
import './index.css';

class ItemList extends Component {
    render() {
        let cards = this.props.ids.map((id) => {
            return <ItemCard id={id} key={id} />
        })
        return (
            <section>
                {cards}
            </section>
        )
    }
}

export default ItemList;