import { combineReducers } from 'redux';
import login from './loginReducer';
import initialState from './initialStateReducer';

export default combineReducers({
  login,
  initialState,
});

export const getLogin = ({ login }) => login;
export const getInitialState = ({ initialState }) => initialState;
