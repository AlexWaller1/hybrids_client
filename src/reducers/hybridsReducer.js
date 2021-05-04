export const hybridsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_GRADS':
            return action.payload
    }
}