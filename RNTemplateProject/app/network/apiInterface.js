import Config from './config';
import { post, setAuthHeaders } from './services';
import * as ActionTypes from '../constants/serviceActionConstants';
import { throwIfMissing } from '../helpers';

/*
Making Request for the given type
Type will identify the end url to be
*/
export function makeRequest(
  type = throwIfMissing('Action Type'),
  payload,
  env,
  successCallBack = throwIfMissing('Success Callback'),
  errorCallback = throwIfMissing('Error Callback'),
) {
  switch (type) {
    case ActionTypes.LOGIN:
      post(Config.login, payload, env, successCallBack, errorCallback);
      break;
    case ActionTypes.SET_JWT_TOKEN:
      setAuthHeaders(payload);
      break;
    case ActionTypes.DASH_BOARD:
      post(Config.dashboard, payload, env, successCallBack, errorCallback);
      break;
    case ActionTypes.SETTING_PUBLIC_KEY:
      post(
        Config.settingPublicKey,
        payload,
        env,
        successCallBack,
        errorCallback,
      );
      break;
    default:
      break;
  }
}
