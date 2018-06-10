import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
 
import AppReducer from './reducer';
import * as pages from './pages';
import './App.css';


const store = createStore(AppReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={pages.Home}/>
          <Route path="/cart" component={pages.Cart} />
        </Router>
      </Provider>
    );
  }
}

export default App;
