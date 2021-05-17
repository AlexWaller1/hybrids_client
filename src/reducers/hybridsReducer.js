export const hybridsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_HYBRIDS':
            return action.payload
        case 'ADD_HYBRID':
            return [...state, action.payload]
        case 'REMOVE_HYBRID':
            return state.filter(hybrid => hybrid.id!==action.payload)
    
        default:
            return state
    }
}
// a reducer is a function, a reduce a function runs on every item of the array
// whenever we dispatch an action, we already have a state
// ...state copies everything we had as state plus the payload.
// switch will skip other actions until it finds the matching case.
// we need a default state in case none of the actions match
