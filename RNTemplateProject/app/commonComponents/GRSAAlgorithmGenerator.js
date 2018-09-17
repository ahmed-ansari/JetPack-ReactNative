/* 
This class will create Public and Private keys using RSA algorithm
*/
import { RSA } from 'react-native-rsa-native';
import * as Constants from '../constants/globalConstant';
/*
This method will generate signed key and return to the component
*/

export function generatePublicKey(callBack) {
  RSA.generateKeys(2048) // set key size
    .then(keys => {
      let publicKey = keys.public.replace(Constants.RSABegin, '');
      publicKey = publicKey.replace(Constants.RSAEnd, '');
      return callBack(publicKey.trim());
    });
}
