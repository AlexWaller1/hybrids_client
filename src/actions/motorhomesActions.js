// where our client will communicate with api
// fundamental to setting up crud actions
// action functions must always return a dispatch
// post will need a motorhome argument to post
// delete will need an id argument to delete
export const fetchMotorhomes = () => {
    return(dispatch) => {
        fetch('http://localhost:3000/motorhomes')
        .then(resp => resp.json())
        .then(motorhomes => dispatch({ type: 'FETCH_MOTORHOMES', payload: motorhomes }))
    }
}

