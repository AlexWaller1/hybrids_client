// remember that reducer functions always need the parameters of state as an empty array, and
// then action
// it will also need switch(action.type) which will skip other actions until it finds a match
// there will also need to be a default state, so if for whatever reason none of the actions match, then
// we can return a default state, which will simply be an empty array

// as always, this reducer will need to go through the rootReducer

export const motorhomesReducer = ( state = [], action ) => {
// state and action parameters do not go in curly braces
// reducer functions will always need 
    switch(action.type) {

        case 'FETCH_MOTORHOMES':
            return action.payload

        case 'ADD_MOTORHOME':
            return [...state, action.payload]

        case 'REMOVE_MOTORHOME':
        return state.filter(motorhome => motorhome.id!==action.payload)
        // when we call our delete action

        default:
            return state
    }

    
}

// a reducer is a function, a reducer functions runs on every item of the array
// whenever we dispatch an action, we already have a state
// ...state copies everything we had as state.
// Whenever we call on the post action we don't simply want only the newest posted object to show,
// but for the whole index to show with the new object included
// therefore we want the previous state (...state) plus the new object (action.payload)