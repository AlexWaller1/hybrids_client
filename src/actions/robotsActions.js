// create an action that is going to fetch the Robots from the the api
// endpoints are where we are grabbing data from in api

export const fetchRobots = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/robots')
        .then(resp => resp.json())
        .then(robots => dispatch({ type: 'FETCH_ROBOTS', payload: robots}))
    }
}