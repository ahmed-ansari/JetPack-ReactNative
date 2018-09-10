// import {Actions} from 'react-native-router-flux'
// import * as Utils from '../../utils'
import * as ActionTypes from '../../actionTypes';
import {post} from '../../reducers/networkReducers/api'
// import helper comonents as required from helpers

/*
Login action creator.
Do the primary validation on the given credentials.
Call the Login WS and handle the response.
Callback to inform back the LoginComponent
 */
export const login = (/* data , Callback */) => {
  return dispatch => {
    // Implemenation goes here.
    // Business logic/WS calls
    // End of this function flow dispatch action
    // and/or navigate to other screens
    dispatch({
      type: ActionTypes.LOGIN_SUCCESS,
      data: {
        /* username:userInfo[0].username,login:true */
      },
    });
  };
};
