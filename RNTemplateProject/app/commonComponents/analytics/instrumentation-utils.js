/**
 * This contains set of methods to interface with 
 * the 3rd Party API for logging the error or 
 * crashes in app.
 */
//import { Configuration } from 'bugsnag-react-native';
const bugSnagLogs = require('./bugsnag-log').default;

var instrumentUtils = (function () {
    var opts;
    // var bugsnag = require('bugsnag_log'); 
    const bugsnag = new bugSnagLogs();
    var releaseStageType = {
        DEVELOPMENT: 'development',
        PRODUCTION: 'beta'
    }
    // const configuration = new Configuration()
    /**
     * This will initialise the 3rd Party
     * @param {*} apiKey 
     * @param {*} releaseStage 
     * @param {*} autoNotify 
     */
    var initialize = function initialize(apiKey, releaseStage = releaseStageType.DEVELOPMENT, autoNotify = false) {
        bugsnag.configure(apiKey, autoNotify, releaseStage, "1.4.5")
    };
    /**
     * This helps to reset the user info during logout
     */
    var clearUserInfo = function clearUser() {
        bugsnag.clearUserInfo()
    }
    /**
     * This helps to set the user info during login
     */
    var addUserInfo = function addUserInfo(userId = '100', userName = 'Jessica', userEmailId = 'abc@jdjsd.com') {
        bugsnag.setUserInfo(userId, userName);
    }
    /**
     * This helps to log the info level
     * @param {*} info 
     */
    var logInfo = function logInfo(info) {
        opts = {
            severity: 'info',
        }
        logBug(info, opts)
    };
    /**
      * This helps to log the error level
     * @param {*} error 
     * @param {*} errorMessage 
     * @param {*} additionalInfo 
     */
    var logError = function logError(error, errorMessage = '', additionalInfo = '') {
        opts = {
            severity: 'error',
            errorMessage: errorMessage,
            additionalInfo: additionalInfo
        }
        logBug(error, opts)
    };
    /**
     * This helps to log the warning level
     * @param {*} warning 
     */
    var logWarning = function logWarning(warning) {
        opts = {
            severity: 'warning',
        }
        logBug(warning, opts)
    };
    /**
     * This will log info to the 3rd party
     * @param {*} error 
     * @param {*} reportedInfo 
     */
    var logBug = function logBug(error, reportedInfo) {
        bugsnag.logMessage(error, reportedInfo)
    }

    return {
        initialize: initialize,
        addUserInfo: addUserInfo,
        clearUserInfo: clearUserInfo,
        logInfo: logInfo,
        logError: logError,
        logWarning: logWarning
    };

})();

export default instrumentUtils
