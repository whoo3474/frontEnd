import React, {Component} from 'react';
import { Link } from 'react-router';
import { getItem } from 'api/items';
import './index.css';

class ItemCard extends Component {
    state = {
        item:null
    }
    componentDidMount() {
        getItem(this.props.id).then(item => {
            this.setState({item:item});
        })
    }
    render() {
        const {item} = this.state;
        if(item === null) {
            return (
                <article className="item-card">
                    <h3 className="name">Loading...</h3>
                </article>
            )
        }
        return (
            <article className="item-card">
                <Link to={`/detail/${item.id}`}>
                    <img src={item.photoURL} />
                    <div className="info">
                        <h3 className="name">{item.name}</h3>
                        <span className="ft-bold ft-16">{item.price.toLocaleString()}웝</span>
                    </div>
                </Link>
            </article>
        )
    }
}

export default ItemCard;