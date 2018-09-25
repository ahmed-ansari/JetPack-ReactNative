// import {Actions} from 'react-native-router-flux'
// import * as Utils from '../../utils'
import * as ActionTypes from '../../actionTypes';
import { makeRequest } from '../../network/apiInterface';
import { setLocale } from '../../locales/Lang';
import {
  SetKeyValueToStore,
  GetKeyValueFromStore,
  RemoveValueFromStore,
} from '../../commonComponents/GPersistantStore';
// import helper comonents as required from helpers
import {
  checkBiometricAvailability,
  activateTouchID,
} from '../../commonComponents/GBiometricHandler';

/*
Login action creator.
Do the primary validation on the given credentials.
Call the Login WS and handle the response.
Callback to inform back the LoginComponent
 */
export const login = (data /*, Callback */) => {
  return dispatch => {
    // Implemenation goes here.
    // Business logic/WS calls
    // End of this function flow dispatch action
    // and/or navigate to other screens
    // Below "get" string will be removed when the real API used
    makeRequest(
      ActionTypes.LOGIN,
      data,
      response => {
        dispatch({
          type: ActionTypes.LOGIN_SUCCESS,
          data: response,
        });
      },
      error => {
        dispatch({
          type: ActionTypes.LOGIN_FAILURE,
          data: null,
        });
      },
    );
  };
};

export function changeUserLanguage(langCode) {
  return () => {
    setLocale(langCode);
  };
}

export function storeSecureData(
  key,
  value,
  storeSuccessCallback,
  storeErrorCallback,
) {
  return () => {
    SetKeyValueToStore(key, value, storeSuccessCallback, storeErrorCallback);
  };
}

export function retrieveSecureData(
  key,
  retrieveSuccessCallback,
  retrieveErrorCallback,
) {
  return () => {
    GetKeyValueFromStore(key, retrieveSuccessCallback, retrieveErrorCallback);
  };
}

export function removeSecureData(
  key,
  removeSuccessCallback,
  removeErrorCallback,
) {
  return () => {
    RemoveValueFromStore(key, removeSuccessCallback, removeErrorCallback);
  };
}

export function isBiometricAvailable(callback) {
  return () => {
    checkBiometricAvailability(callback);
  };
}

export function enableBioMetricID(successCallback, errorCallback) {
  return () => {
    console.log('enableBioMetricID : Actions :');
    activateTouchID(successCallback, errorCallback);
  };
}
