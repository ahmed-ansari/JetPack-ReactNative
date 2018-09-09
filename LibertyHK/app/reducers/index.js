import {combineReducers} from 'redux'
import login from './loginReducer'

export default combineReducers({
    login,
 })

 export const getLogin = ({login}) => login
