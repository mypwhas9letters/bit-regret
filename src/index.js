import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import coinsReducer from './reducers/coin_reducer';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(coinsReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
 );

registerServiceWorker();
