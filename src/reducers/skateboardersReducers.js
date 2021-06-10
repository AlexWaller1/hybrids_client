// this is where the actions for skateboarders will go
// the skateboarders reducer will go through the root reducer to the redux store
// reducer functions alway need parameters of state and action

export const skateboardersReducer = ( state = [], action ) => {

    switch(action.type) {
        
        case 'FETCH_SKATEBOARDS':
          return action.payload

        case 'ADD_SKATEBOARD':
            return [...state, action.payload]

        case 'REMOVE_SKATEBOARD':
            return state.filter(skateboard => skateboard.id!==action.payload)

        default:
            return state
    }


}