// react-redux, redux, thunk

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter as Router } from 'react-router-dom'

import App from './components/App'
import { rootReducer } from './reducers/rootReducer'


// need to create a store for Redux => createStore 1. reducer 2. dev tools

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.render(
    
    <Provider store={store}>
        <Router>
     <App />
       </Router>
    </Provider>,
    document.getElementById('root')
)

// this is the top of the app that flows through the root id of the DOM page

// createStore - creates a Redux store that holds the complete state tree of your app.
// There should only be a single store in your app

// a store holds the whole state tree of your application. The only way to change the state
// inside it is to dispatch an action on it.

// The Redux State is a snapshot of our application at any given time.

// When using Redux, state is stored globally in the Redux store. Any component that needs
// access to a value may subscribe to the store and gain access to that value.

// With thunk, we can start dispatching actions asynchronously

// The <Provider> component makes the Redux store available to any nested components that 
// need access to the Redux store

