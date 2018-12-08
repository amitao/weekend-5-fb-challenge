import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

// reducers to add feedbacks
const enterFeedBackReducer = (state = [], action) => {
  if (action.type === 'ADD_FEEDBACK'){
    return [...state, action.payload]
  }
  return state
}




const storeInstance = createStore(
  // reducers
  combineReducers({
    enterFeedBackReducer
  }),
  // enhancer
  applyMiddleware(logger)
)
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
