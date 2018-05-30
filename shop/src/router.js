import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';

import App from './App';
import { Cart, Detail } from './pages';

class AppRouter extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <Route path="detail/:id" component={Detail} />
          {/* :id가 파라미터로 들어감 */}
          <Route path="cart" component={Cart} />
        </Route>
      </Router>
    )
  }
}

export default AppRouter;