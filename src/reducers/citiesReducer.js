// actions for cities passed to rootReducer through this reducer.

export const citiesReducer = (state = [], action) => {
    // reducers need two arguments, state and action
    // since reducers will always send a new state to the Redux store, the
    // the state will always start as an empty array
    switch(action.type){
        // switch will skip other actions until it finds a matching case
        case 'FETCH_CITIES':
            return action.payload
            // FETCH_CITIES simply returns the payload of the action
        case 'ADD_CITY':
            return [...state, action.payload]
            // ADD_CITY returns the previous state plus the new payload object.
        case 'REMOVE_CITY':
            return state.filter(city => city.id!==action.payload)
            // REMOVE_CITY returns the objects that do not have the id of the delted payload
        default:
            return state
            // if none of these actions match the action called
            // we'll simply return the empty array of the new state
    }

}

// a reducer is a function, a reducer function runs on every item of the array
// whenever we dispatch an action, we already have a state
// ...state copies everything we had as a previous state, plus the new object as the payload.
// switch will skip other actions until it finds the matching case.
// we need a default state in case none of the actions match