import axios from "axios";
import { loginEndpoint } from "./config";
import {get,post} from '../network/apiMethods'
import * as ActionTypes from '../actionTypes';
import {throwIfMissing} from '../helpers/CommonMethods'
//Making Request for the given type
//Type will identify the end url to be 
export function makeRequest(type=throwIfMissing(), payload, successCallBack=throwIfMissing(), errorCallback=throwIfMissing()) {
  switch(type){
    case ActionTypes.LOGIN: 
      get(loginEndpoint,payload,successCallBack,errorCallback)
    break;
    default:
    break;
  }
}
