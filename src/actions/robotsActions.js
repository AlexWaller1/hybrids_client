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