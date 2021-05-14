export const robotsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_ROBOTS':
            return action.payload
        case 'ADD_ROBOT':
            return [...state, action.payload]
        case 'REMOVE_ROBOT':
            return state.filter(robot => robot.id!==action.payload)
        default:
            return state
    }
}