import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {applyMiddleware, createStore} from 'redux'
import reducer from './store/reducer';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

// middleware
const loggerMiddleware = store => next => action => {
    console.log('dispatching: ', action);
    let result = next(action);
    console.log('next state: ', store.getState())
    return result
}


//1. Store - One single store to contains all application state
const store = createStore(reducer, applyMiddleware(loggerMiddleware, thunkMiddleware));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
