// where our client will communicate with api
// fundamental to setting up crud actions
// action functions must always return a dispatch
// post will need a motorhome argument to post
// delete will need an id argument to delete
export const fetchMotorhomes = () => {
    // doesn't need
    return(dispatch) => {
        fetch('http://localhost:3000/motorhomes')
        // route we are fetching the data from
        .then(resp => resp.json())
        // json object converted to javascript object
        .then(motorhomes => dispatch({ type: 'FETCH_MOTORHOMES', payload: motorhomes }))
        // here is the dispatch that our function will be returning
    }
}

export const addMotorhome = motorhome => {
    // needs argument of motorhome since object will need to go through json to 
    return(dispatch) => {
        fetch('http://localhost:3000/motorhomes', {
            method: 'POST',
            body: JSON.stringify(motorhome),
            headers: { 'Content-Type': 'application/json' }
            // since this is not a get request, we need to make specifications here

        })
        .then(resp => resp.json())
        // json object converted to javascript object
        .then(motorhome => dispatch({ type: 'ADD_MOTORHOME', payload: motorhome }))
        // dispatch that will be returned by addMotorhome function
    }
}

export const removeMotorhome = id => {
    return dispatch  => {
        fetch(`http://localhost:3000/motorhomes/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json'}
        })
        .then(resp => resp.json())
        .then(() => dispatch({ type: 'REMOVE_MOTORHOME', payload: id }))
    }
}

