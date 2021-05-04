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
    fetch('http://localhost:3000/hybrids', {
        method: 'POST',
        body: JSON.stringify(hybrid),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(resp => resp.json())
    .then(hybrids => dispatch({ type: 'ADD_HYBRID', payload: hybrids }))
}
