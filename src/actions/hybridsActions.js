// create an action that is going to fetch the Hybrids from the api
// endpoints are where we are grabbing data from in api

export const fetchHybrids = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/hybrids')
        .then(resp => resp.json())
        .then(hybrids => console.log('fetchHybrids', hybrids))
    }
}

