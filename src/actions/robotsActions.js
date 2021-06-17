// create an action that is going to fetch the Robots from the the api
// endpoints are where we are grabbing data from in api

export const fetchRobots = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/robots')
        .then(resp => resp.json())
        .then(robots => dispatch({ type: 'FETCH_ROBOTS', payload: robots}))
    }
}

// this data will go to the robotsReducer
// the default of fetch is to make a get request
// if not a get request, we need to specify

export const addRobot = robot => {
    return dispatch => {
        fetch('http://localhost:3000/robots', {
        method: 'POST',
        body: JSON.stringify(robot),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(resp => resp.json())
    .then(robot => dispatch({ type: 'ADD_ROBOT', payload: robot }))
   }
}

export const removeRobot = id => {
    return dispatch => {

        // dispatch({ type: 'REMOVE_ROBOT', payload: id })

        fetch(`http://localhost:3000/robots/${id}`, {
            method: 'DELETE',
            //body: JSON.stringify({id})
            headers: { 'Content-Type': 'application/json' }
        })
        .then(() => dispatch({ type: 'REMOVE_ROBOT', payload: id}))
    }
}

// dispatch - dispatches an action. This is the only way to trigger state change
// actions are events that cause a change to the state of the application