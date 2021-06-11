// this is where the actions for skateboarders will go
// the skateboarders reducer will go through the root reducer to the redux store
// reducer functions alway need parameters of state and action

export const skateboardersReducer = ( state = [], action ) => {
    // state and action paremeters are always needed

    switch(action.type) {
        // will skip other actions until a match is found
        
        case 'FETCH_SKATEBOARDS':
          return action.payload
          // will return all skateboarders currently in the database

        case 'ADD_SKATEBOARD':
            return [...state, action.payload]
            // will return the previous state, plus the newest posted skateboarder

        case 'REMOVE_SKATEBOARD':
            return state.filter(skateboard => skateboard.id!==action.payload)
            // will return all skateboarders except the one that just got deleted

        default:
            return state
            // will return the state of an empty array if no match can for the actions
    }


}