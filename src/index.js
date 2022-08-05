import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


import 'front-end/css/style.css'
import 'front-end/css/temporary.css'

import { createStore , applyMiddleware  } from 'redux';
// import allReducers from './reducers';
import rootReducer from 'store/rootReducer';

import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';



const store = createStore(rootReducer, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
