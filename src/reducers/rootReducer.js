import { combineReducers } from 'redux'

import { hybridsReducer } from './hybridsReducer'

export const rootReducer = combineReducers({
    hybrids: hybridsReducer
})

// State is immutable, this means you cannot modify it
// So what do we do? We register reducers that handle the action caused by the user
// the reducer takes the action, and produces a new, fresh state