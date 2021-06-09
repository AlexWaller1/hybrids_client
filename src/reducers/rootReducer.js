import { combineReducers } from 'redux'

import { hybridsReducer } from './hybridsReducer'
import { robotsReducer } from './robotsReducer'
import { minimartsReducer } from './minimartsReducer'
import { skateparksReducer } from './skateparksReducer'
import { citiesReducer } from './citiesReducer'
import { motorhomesReducer } from './motorhomesReducer'

export const rootReducer = combineReducers({
    // all reducers must be passed through the route reducer
    hybrids: hybridsReducer,
    robots: robotsReducer,
    minimarts: minimartsReducer,
    skateparks: skateparksReducer,
    cities: citiesReducer,
    motorhomes: motorhomesReducer
})

// State is immutable, this means you cannot modify it
// So what do we do? We register reducers that handle the action caused by the user
// the reducer takes the action, and produces a new, fresh state