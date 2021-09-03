import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {applyMiddleware, combineReducers, createStore} from 'redux'
import courseReducer from './store/course-reducer';
import workoutReducer from './store/workout-reducer'
import authReducer from './store/auth-reducer'
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

// middleware
const loggerMiddleware = store => next => action => {
    console.log('dispatching: ', action);
    let result = next(action);
    console.log('next state: ', store.getState())
    return result
}


const composedEnhancer = composeWithDevTools(
  // EXAMPLE: Add whatever middleware you actually want to use here
  applyMiddleware(loggerMiddleware, thunkMiddleware)
  // other store enhancers if any
)

//1. Store - One single store to contains all application state
// const store = createStore(reducer, composedEnhancer);

const store = createStore(combineReducers({courseReducer, workoutReducer, authReducer}) , composedEnhancer)

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
