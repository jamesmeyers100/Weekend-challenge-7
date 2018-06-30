import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
//reduxStore Stuff
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

const feedbackReducer = (state=[], action) => {
    if( action.type === 'ADD_FEELING'){
        console.log(`Hey, I'm reducing your feeling!`, action);
        return [...state];
    } else if( action.type === 'ADD_UNDERSTANDING') {
        console.log(`Hey, I'm reducing your understanding!`, action)
        return [...state, action.payload];
    } else if( action.type === 'ADD_SUPPORTED') {
        console.log(`Hey, I'm reducing your supported!`, action)
        return [...state, action.payload];
    } else if( action.type === 'ADD_COMMENT') {
        console.log(`Hey, I'm reducing your comment`, action)
        return [...state, action.payload];
    } 
    return state;
}

const storeInstance = createStore(
    combineReducers({
        feedbackReducer,
    }),
    applyMiddleware(logger)
);
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
