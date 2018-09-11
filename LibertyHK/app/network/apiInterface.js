import Config from './config';
import { get, post } from './services';
import * as ActionTypes from '../actionTypes';
import { throwIfMissing } from '../helpers'

/*
Making Request for the given type
Type will identify the end url to be
*/
export function makeRequest(
  type = throwIfMissing('Action Type'),
  payload,
  successCallBack = throwIfMissing('Success Callback'),
  errorCallback = throwIfMissing('Error Callback'),
) {
  switch (type) {
    case ActionTypes.LOGIN:
      get(Config.login, payload, successCallBack, errorCallback);
      break;
    default:
      break;
  }
}
