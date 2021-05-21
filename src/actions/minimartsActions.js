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
    
}