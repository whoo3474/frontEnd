import React, {Component} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
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
        let isInCart = false;

        if(item === null) {
            return (
                <article className="item-card">
                    <h3 className="name">Loading...</h3>
                </article>
            )
        }

        if(this.props.cartItems.indexOf(item.id) >= 0) {
            isInCart = true;
        }

        return (
            <article className="item-card">
                <Link to={`/detail/${item.id}`}>
                    <div className="image">
                        <img src={item.photoURL} />
                        {
                            isInCart ?
                            <div className="overay">
                                이미 담긴 상품
                            </div> :
                            <div />
                        }
                        
                    </div>
                    <div className="info">
                        <h3 className="name">{item.name}</h3>
                        <span className="ft-bold ft-16">{item.price.toLocaleString()}원</span>
                    </div>
                </Link>
            </article>
        )
    }
}

function mapStateToProps(state) {
    return {
        cartItems:state.cart.cartItems
    };
}

export default connect(mapStateToProps)(ItemCard);