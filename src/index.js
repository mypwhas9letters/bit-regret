import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


import coinsReducer from './reducers/coin_reducer';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(coinsReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
 );

registerServiceWorker();
