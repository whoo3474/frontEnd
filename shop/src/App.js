import React, { Component } from 'react';
import { Link } from 'react-router';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="container">
            <h1 className="logo"><Link to="/">SHOP</Link></h1>
            <ul className="nav">
              <li><Link to="/cart"><div className="cart-icon"><i className="material-icons">shopping_cart</i><div className="badge">1</div></div></Link></li>
            </ul>
          </div>
        </header>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default App;
