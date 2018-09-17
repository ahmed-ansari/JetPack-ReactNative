import RNSecureKeyStore, { ACCESSIBLE } from 'react-native-secure-key-store';

export function SetKeyValueToStore(key, value, accessible, callBack) {
  RNSecureKeyStore.set(key, value).then(
    res => {
      console.log(res);
      return callBack(res);
    },
    err => {
      console.log(err);
      return callBack(err);
    },
  );
}

export function GetKeyValueToStore(key, callBack) {
  RNSecureKeyStore.get(key).then(
    res => {
      console.log(res);
      return callBack(res);
    },
    err => {
      console.log(err);
      return callBack(err);
    },
  );
}
