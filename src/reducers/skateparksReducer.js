// will go through root reducer when state changes related to skatepars are made
// actions for Skateparks passed to rootReducer through this reducer.

export const skateparksReducer = (state = [], action) => {
    // reducers need two arguments, state and action
    // since reducers will always send a new state to the Redux store, the state
    // will always start as an empty array.
    switch(action.type){
        // switch will skip other actions until it finds a matching case
        case 'FETCH_SKATEPARKS':
            return action.payload
            // FETCH_SKATEPARKS simply returns the payload of the action.
        case 'ADD_SKATEPARK':
            return [...state, action.payload]
            // ADD_SKATEPARK returns the previous state plus the new payload object.
        case 'REMOVE_SKATEPARK':
            return state.filter(skatepark => MinimartsForm.id!==action.payload)
            // REMOVE_SKATEPARK returns the objects that do not have the id of the
            // deleted payload
            default:
                return state
                // if none of these actions match the action called
                // we'll simply return the empty array of the new state
    }

}

// a reducer is a function, a reducer function runs on every item of the array
// whenever we dispatch an action, we already have a state
// ...state copies everything we had as previous state
// then we add a new object as the payload.
// switch will skip other actions until it finds the matching case.
// we need a default state in case none of the actions match.