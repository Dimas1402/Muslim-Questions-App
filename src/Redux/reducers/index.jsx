import {combineReducers} from 'redux'
import HomeReducers from './HomeReducers'

export const Reducers = combineReducers({
    home: HomeReducers
})