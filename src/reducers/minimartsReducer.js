// actions for Minimarts passed to rootReducer through this reducer.
export const minimartsReducer = (state = [], action) => {
    // reducers need two arguments, state and action
    // since reducers will always send a new state to the Redux store, the 
    // state will always start as an empty array.
    switch(action.type){
        case 'FETCH_MINIMARTS':
            return action.payload
        case 'ADD_MINIMART':
            return [...state, action.payload]
        case 'REMOVE_MINIMART':
            return state.filter(minimart => minimart.id!==action.payload)

            default:
                return state
    }
}

// a reducer is a function, a reducer function runs on every item of the array
// whenever we dispatch an action, we already have a state
// ...state copies everything we had as previous state, plus the new object as the payload.
// switch will skip other actions until it finds the matching case.
// we need a default state in case none of the actions match.