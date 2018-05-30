import React, { Component } from 'react';
import { Link } from 'react-router';

import './styleSheet/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1 className="logo">SHOP</h1>
          <ul className="nav">
            <li><Link to="/detail/5">상세페이지</Link></li>
            <li><Link to="/cart">장바구니(0)</Link></li>
          </ul>
        </header>
        {this.props.children}
      </div>
    )
  }
}

export default App;
