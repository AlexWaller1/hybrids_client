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
    }

}