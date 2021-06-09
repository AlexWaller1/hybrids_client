// this is where we fetch city objects for our frontend
// fetch requests are able to connect to api in order to accomplish CRUD actions

export const fetchCities = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/cities')
        .then(resp => resp.json)
        .then(cities => dispatch({type:'FETCH_CITIES', payload: cities}))
    }
}