import * as ActionTypes from '../actionTypes'

//Default state will be used by the reducer if not available in the store state.
const DEFAULT_STATE = {login: false} 

export default (state = DEFAULT_STATE, action)=> {

  switch(action.type) {
    case ActionTypes.LOGIN_SUCCESS: //this should be changed with 
      return {
        ...state,
        // login: action.data.login,
        // username:action.data.username
      }
    default:
      return state
  }
}