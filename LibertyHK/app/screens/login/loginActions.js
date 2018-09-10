// import {Actions} from 'react-native-router-flux'
// import * as Utils from '../../utils'
import * as ActionTypes from '../../actionTypes';
import {post,get} from '../../network/api'
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
    //Below "get" string will be removed when the real API used
    get("get").then((response,error)=>{
      //Local callback will connect with API method and return the result in the given variables
      let type = null
      if(error != null){
        type = ActionTypes.LOGIN_SUCCESS
      }else{
        type = ActionTypes.LOGIN_FAILURE
      }
      dispatch({
        type: type,
        data: response,/*{
          username:userInfo[0].username,login:true 
      },*/
      });
    })
    
  };
};
