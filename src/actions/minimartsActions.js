// fetch actions for minimarts
// will be passed through minimart reducers, through rootReducer, then into the Redux store

export const fetchMinimarts = () => {
    return (dispatch) => {
        // functions to create a new redux state must always return and have an 
        // argument of dispatch
        fetch('http://localhost:3000/minimarts')
        .then(resp => resp.json())
        // minimart objects being converted to javascript objects
        .then(minimarts => dispatch({ type: 'FETCH_MINIMARTS', payload: minimarts }))
        // action type and payload being dispatched, will be able to be passed through
        // reducers to redux store to make a new redux state
    }
}
// since these are actions that will be passed to the redux store to make changes to
// redux state, these functions must return a dispatch

// this data will go to the minimartsReducer
// the default of fetch is to make a get request
// if not a get request, we need to specify

export const addMinimart = minimart => {
    // need argument because a specific object is being posted and needs to
    // stringified
    return dispatch => {
        fetch('http://localhost:3000/minimarts', {
            method: 'POST',
            // need to specify that this is a post request
            body: JSON.stringify(minimart),
            // object needs to be converted to a json string to be passed to server
            headers: { 'Content-Type': 'application/json' }
            // establishing protocols
        })
        .then(resp => resp.json())
        // minimart objects converted to javascript objects
        .then(minimart => dispatch({ type: 'ADD_MINIMART', payload: minimart }))
        // object will then dispatched with type and payload specified
    }
}

export const removeMinimart = id => {
    // function needs an argument
    return dispatch => {

        // dispatch({ type: 'REMOVE_MINIMART', payload: id })

        fetch(`http://localhost:3000/minimarts/${id}`, {
            // since id will change depending on the object, it needs to be interpolated
            // into the url
            method: 'DELETE',
            // method must be specified if not a get fetch.
            headers: { 'Content-Type': 'application/json' }
            // establishing protocols
        })
        .then(() => dispatch({ type: 'REMOVE_MINIMART', payload: id }))
        // ask if we need an argument for the id of this function
    }
}

// dispatch - dispatches an action. This is the only way to trigger state change.
// actions are events that cause a change to the state of the application's redux state