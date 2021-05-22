// actions for Minimarts passed to rootReducer through this reducer.
export const minimartsReducer = (state = [], action) => {
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

