// fetch actions for minimarts
// will be passed through minimart reducers, through rootReducer, then into the Redux store

export const fetchMinimarts = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/minimarts')
        .then(resp => resp.json())
        .then(minimarts => dispatch({ type: 'FETCH_MINIMARTS', payload: minimarts }))
    }
}