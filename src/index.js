import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
//::::::::::
//STEP 3: IMPORT EVERYTHING TO CONNECT 
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import { reducer } from './state/reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

//STEP 4: a)create STORE and b) WRAP APP IN PROVIDER STORE={STORE}

const store = createStore(reducer, applyMiddleware(thunk,logger))


ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);
