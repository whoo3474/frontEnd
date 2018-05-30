import React from 'react';
import ReactDOM from 'react-dom';
import './styleSheet/index.css';
import Router from './router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
