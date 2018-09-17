//This class will have biometric authentication process methods
//This will ease the use of biometric process
//Right now this supports touch id in ios and touch id in android

import TouchID from 'react-native-touch-id'
import { strings } from '../locales/Lang';

//This method will check the availability of the biometric on the device
//This will have a callback, through it will return the fingure print available and configured in the device as a bool

export function checkBiometricAvailability(callback) {
    TouchID.isSupported()
        .then(biometryType => {
            // Success code
            //Android will receive biometryType === true. So the handler condition has the bool check
            if (biometryType === 'FaceID') {
                return callback(true)
            } else if (biometryType === true || biometryType == 'TouchID') {
                return callback(true)
            } else {
                return callback(false)
            }
        })
        .catch(error => {
            // Failure code
            return callback(false)
        });
}

//This method will help the app to control the authentication process
//It will trigger the pop (system alert) to get the fingure print and validate
//In iOS it will stay in the same pop with error for 3 times, if the fingure print is wrong and it will throw the error message
//In Android it will show the error pop on the first wrong touch itself 
export function activateTouchID(successCallBack, failureCallBack) {
    const optionalConfigObject = {
        title: strings('touchId.popupTitle'), // Applicable only on Android
        color: "#e00606", // Applicable only on Android,
        fallbackLabel: strings('touchId.fallbackText'), // Applicable only on iOS (if empty, then label is hidden)
    }

    TouchID.authenticate(strings('touchId.descriptionText'), optionalConfigObject)
        .then(success => {
            //Success callback will be triggered for valid fingure
            return successCallBack()
        })
        .catch(error => {
            //Failure callback will be triggered for invalid fingure
            return failureCallBack()
        });
}