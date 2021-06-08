// this is where everything will begin for a group of objects
// this is where we get our data from the API

export const fetchSkateparks = () => {
    // the constant of fetchSkateparks is equal to a function that will return a dispatch
    return (dispatch) => {
        fetch('http://localhost:3000/skateparks')
        // this is route from api we will get the data from
        .then(resp => resp.json())
        // data will need to be converted from JSON object to JavaScript object
        .then(skateparks => dispatch({ type: 'FETCH_SKATEPARKS', payload: skateparks}))
        // we will take objects and return a dispatch with type and payload
    }
}
// this data will go to the skateparksReducer
// the default of the fetch is to make a get request
// if not a get request, we need to specify

export const addSkatepark = skatepark => {

    return dispatch => {
        fetch('http://localhost:3000/skateparks', {
            method: 'POST',
            // need to specify that this is a post request
            body: JSON.stringify(skatepark),
            // object needs to be converted to a json string to be passed to server
            headers: { 'Content-Type': 'application/json' }
            // establishing protocols
        })
        .then(resp => resp.json())
        // skatepark objects converted to javascript objects
        .then(skatepark => dispatch({ type: 'ADD_SKATEPARK', payload: skatepark }))

    }

}

export const removeSkatepark = id => {
    // function needs an argument
    return dispatch => {
        
        // dispatch({ type: 'REMOVE_SKATEPARK', payload: id })

        fetch(`http://localhost:3000/skateparks/${id}`, {
            // since id will change depending on the object, it needs to be interpolated
            // into the url
            method: 'DELETE',
            // method must be specified if not a get fetch.
            headers: { 'Content-Type': 'application/json' }
            // establishing protocols
        })
        .then(() => dispatch({ type: 'REMOVE_SKATEPARK', payload: id }))
        // ask if we need an argument for the id of this function
    }
}

//dispatch - dispatches an action. This is the only way to trigger state change.
// actions are events that cause a change to the state of the applications's redux state