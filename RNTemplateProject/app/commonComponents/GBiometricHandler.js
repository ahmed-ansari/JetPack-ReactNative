/*
This class will have biometric authentication process methods
This will ease the use of biometric process
Right now this supports touch id in ios and touch id in android
*/
import { Platform } from 'react-native';
import TouchID from 'react-native-touch-id';
import { strings } from '../locales/Lang';

/*
This method will check the availability of the biometric on the device
biometryType will have the type of biometric that the device has
biometryType will return faceid or touchid in iOS
biometryType will return bool for android
Callback is a return function, used to send the status of the biometric
and configured in the device as a bool
*/

// export default class GBiometricHandler {

export function checkBiometricAvailability(callback) {
  TouchID.isSupported()
    .then(biometryType => {
      /*
            Android will receive biometryType === true.
            So the handler condition has the bool check
            */
      switch (Platform.OS) {
        case 'ios':
          if (biometryType === 'FaceID' || biometryType === 'TouchID') {
            return callback(biometryType);
          }
          return callback(false);
        case 'android':
          if (biometryType === true) {
            return callback(true);
          }
          return callback(false);
        default:
          return callback(false);
      }
    })
    .catch(error => {
      /*
            error -> will have specific information about the error
            it may have the following error type
            'LAErrorAuthenticationFailed' | 'LAErrorUserCancel' |
            'LAErrorUserFallback' | 'LAErrorSystemCancel'|
            'LAErrorPasscodeNotSet' | 'LAErrorTouchIDNotAvailable' |
            'LAErrorTouchIDNotEnrolled'| 'LAErrorTouchIDNotEnrolled' |
            'RCTTouchIDUnknownError' | 'RCTTouchIDNotSupported'
            */

      callback(false, error);
    });
}

/*
This method will help the app to control the authentication process
It will trigger the pop (system alert) to get the fingure print and validate
In iOS it will stay in the same pop with error for 3 times
if the fingure print is wrong and it will throw the error message
In Android it will show the error pop on the first wrong touch itself
*/
export function activateTouchID(successCallBack, failureCallBack) {
  console.log('activateTouchID : handler :');
  const optionalConfigObject = {
    /* Applicable only for Android */
    title: strings('touchId.popupTitle'),
    /* Applicable only for Android */
    color: '#e00606',
    /* Applicable only for iOS (if empty, then label is hidden) */
    fallbackLabel: strings('touchId.fallbackText'),
  };
  console.log('activateTouchID : handler : 2');
  TouchID.authenticate(strings('touchId.descriptionText'), optionalConfigObject)
    .then(success => {
      console.log('activateTouchID : handler : 3');
      /*
            Success callback will be triggered for valid fingure
            */
      if (success) {
        console.log('activateTouchID : handler : 4');
        return successCallBack();
      }

      return failureCallBack();
    })
    .catch(error => {
      /*
            error -> will have specific information about the error
            it may have the following error type
            'LAErrorAuthenticationFailed' | 'LAErrorUserCancel' |
            'LAErrorUserFallback' | 'LAErrorSystemCancel'|
            'LAErrorPasscodeNotSet' | 'LAErrorTouchIDNotAvailable' |
            'LAErrorTouchIDNotEnrolled'| 'LAErrorTouchIDNotEnrolled' |
            'RCTTouchIDUnknownError' | 'RCTTouchIDNotSupported'
            */
      console.log('activateTouchID : handler : 5');
      failureCallBack(error);
    });
}
// }
