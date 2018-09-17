import axios from 'axios';
import Config from './config';
import * as CommonConst from '../constants/globalConstant';
/*
Call post method from actions with params
in body the post request body should be sent from the actions
in endUrl, the endpoint for the request should be sent
*/
export function post(endUrl, payload, env, successCallback, errorCallback) {
  console.log(`${Config[env]}${endUrl}`);
  console.log(JSON.stringify(payload));
  return axios
    .post(`${Config[env]}${endUrl}`, payload)
    .then(response => {
      console.log('successCallback', response, successCallback);
      successCallback(response);
    })
    .catch(error => {
      console.log('error', error, errorCallback);
      if (error.response) {
        errorCallback(error.response);
      }
      errorCallback(error);
    });
}

/*
Call PUT method from actions with params
in body the post request body should be sent from the actions
in endUrl, the endpoint for the request should be sent
*/
export function put(endUrl, payload, env, successCallback, errorCallback) {
  return axios
    .put(`${Config[env]}${endUrl}`, payload)
    .then(response => successCallback(response))
    .catch(error => {
      if (error.response) {
        errorCallback(error.response);
      }
      errorCallback(error);
    });
}
/*
Call get method from actions with params
in endUrl, the endpoint for the request should be sent
*/
export function get(endUrl, payload, env, successCallback, errorCallback) {
  return axios
    .get(`${Config[env]}${endUrl}`)
    .then(response => successCallback(response))
    .catch(error => {
      if (error.response) {
        errorCallback(error.response);
      }
      errorCallback(error);
    });
}

/*
Call remove method from actions with params
in endUrl, the endpoint for the request should be sent
*/
export function remove(endUrl, env, successCallback, errorCallback) {
  return axios
    .delete(`${Config[env]}${endUrl}`)
    .then(response => successCallback(response))
    .catch(error => {
      if (error.response) {
        return errorCallback(error.response);
      }
      return error;
    });
}

/*
call this method from anywhere to set the authtoken
as header in the API calls
*/
export function setAuthHeaders(jwttoken) {
  console.log(jwttoken);
  axios.defaults.headers.common = {
    ...axios.defaults.headers.common,
    'x-auth-token': jwttoken,
  };
}

export function setHeader(type) {
  switch (type) {
    case CommonConst.imageRequest:
      axios.defaults.headers.common = {
        ...axios.defaults.headers.common,
      };
      break;
    default:
      axios.defaults.headers.common = {
        ...axios.defaults.headers.common,
        'Content-Type': 'Application/JSON',
      };
      break;
  }
}
