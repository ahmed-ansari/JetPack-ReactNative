import RNSecureKeyStore from 'react-native-secure-key-store';

export const SetKeyValueToStore=(key, value, storeSuccessCallback,storeErrorCallback) =>{
  RNSecureKeyStore.set(key, value).then(
    res => {
      console.log(res);
      return storeSuccessCallback(res);
    },
    err => {
      console.log(err);
      return storeErrorCallback(err);
    },
  );
}

export function GetKeyValueFromStore(key, retrieveSuccessCallback, retrieveErrorCallback) {
  RNSecureKeyStore.get(key).then(
    res => {
      console.log(res);
      return retrieveSuccessCallback(res);
    },
    err => {
      console.log(err);
      return retrieveErrorCallback(err);
    },
  );
}
export function RemoveValueFromStore(key, removeSuccessCallback,removeErrorCallback) {
  RNSecureKeyStore.remove(key).then(
    res => {
      console.log(res);
      return removeSuccessCallback(res);
    },
    err => {
      console.log(err);
      return removeErrorCallback(err);
    },
  );
}
