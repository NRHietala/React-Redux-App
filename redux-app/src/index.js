import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { reducer } from '../src/reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger'
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
  ,document.getElementById('root')
);
