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