// create an action that is going to fetch the Hybrids from the api
// endpoints are where we are grabbing data from in api

export const fetchHybrids = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/hybrids')
        .then(resp => resp.json())
        .then(hybrids => dispatch({ type: 'FETCH_HYBRIDS', payload: hybrids }))
    }
}
// this data will go to the hybridsReducer



export const addHybrid = hybrid => {
    return dispatch => {
        fetch('http://localhost:3000/hybrids', {
        method: 'POST',
        body: JSON.stringify(hybrid),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(resp => resp.json())
    .then(hybrid => dispatch({ type: 'ADD_HYBRID', payload: hybrid }))
    }
    
}

export const removeHybrid = id => {
    return dispatch => {

        //dispatch({ type: 'REMOVE_HYBRID', payload: id })

        fetch(`http://localhost:3000/hybrids/${id}`, {
            method: 'DELETE',
            //body: JSON.stringify({id}),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(() => dispatch({ type: 'REMOVE_HYBRID', payload: id }))
    }
}

// dispatch - dispatches an action. This is the only way to trigger state change.
// actions are events that cause a change to the state of the application