// react-redux, redux, thunk

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './components/App'


// need to create a store for Redux => createStore 1. reducer 2. dev tools

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.render(
    <Provider store={store}>
     <App />
    </Provider>,
    document.getElementById('root')
)