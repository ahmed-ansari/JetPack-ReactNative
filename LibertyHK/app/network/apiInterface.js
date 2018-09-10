import axios from "axios";
import { loginExt } from "./config";
import {getMethod,postMethod} from '../network/apiMethods'

//Making Request for the given type
//Type will identify the end url to be 
export function makeRequest(type, payload, successCallBack, errorCallback) {
  switch(type){
    case ActionTypes.LOGIN: 
      getMethod(loginEndpoint,payload,successCallBack,errorCallback)
    break;
    default:
    break;
  }
}