// this where application will retrieve skatebaorders from our api
// a fetch is a type of CRUD action

export const fetchSkateboarders = () => {

    return (dispatch) => {

    fetch('http://localhost:3000/skateboarders')
    .then(resp => resp.json())
    .then(skateboarders => dispatch({ type: 'FETCH_SKATEBOARDERS', payload: skateboarders }))
 }
}

export const addSkateboarder = skateboarder => {

    return dispatch => {
        fetch('http://localhost:3000/skateboarders', {
            method: 'POST',
            body: JSON.stringify(skateboarder),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(resp => resp.json())
        .then(skateboarder => dispatch({ type: 'ADD_SKATEBOARDER', payload: skateboarder }))
    }
}

export const removeSkateboarder = id => {

    return dispatch => {
        fetch(`http://localhost:3000/skateboarders/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        })
        // don't need to convert to JSON here
        .then(() => dispatch({ type: 'REMOVE_SKATEBOARDER', payload: id}))
    }
}