import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';


import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';

import App from './App';
import { Cart, ItemDetail, Home } from './pages';

const store = createStore(reducer);

class AppRouter extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="detail/:id" component={ItemDetail} />
            {/* :id가 파라미터로 들어감 */}
            <Route path="cart" component={Cart} />
          </Route>
        </Router>
      </Provider>
    )
  }
}

export default AppRouter;