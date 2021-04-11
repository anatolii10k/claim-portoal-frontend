import {combineReducers} from 'redux'
import {balanceReducer} from './reducers/balanceReducer';

export default combineReducers({
    balance:balanceReducer
})