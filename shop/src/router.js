import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './App';
import { Cart, ItemDetail, Home } from './pages';

class AppRouter extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="detail/:id" component={ItemDetail} />
          {/* :id가 파라미터로 들어감 */}
          <Route path="cart" component={Cart} />
        </Route>
      </Router>
    )
  }
}

export default AppRouter;