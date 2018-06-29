import React, { Component } from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
 
import AppReducer from './reducer';
import * as pages from './pages';
import './App.css';


const store = createStore(
  AppReducer, {}, 
  compose(applyMiddleware(thunkMiddleware, logger))
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={pages.Home}/>
          <Route path="/user" component={pages.User} />
        </Router>
      </Provider>
    );
  }
}

export default App;
