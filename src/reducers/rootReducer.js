import { combineReducers } from 'redux'

import { hybridsReducer } from './hybridsReducer'

export const rootReducer = combineReducers({
    hybrids: hybridsReducer
})