/**
 * This contains the implementation of Bugsnag
 */

import instrumentInter from './iInstrument';
import { Client, Configuration } from 'bugsnag-react-native';

export default class bugSnagLogs implements instrumentHandler {
    constructor() {
        this.configuration = new Configuration();
    }
    configure(apiKey: string, autoNotify: boolean, releaseStage: string, appVersion = '0.0.0') {

        this.apiKey = apiKey
        this.autoNotify = autoNotify
        this.releaseStage = releaseStage
        this.appVersion = appVersion//TODO Read from the Package.json

        this.configuration.apiKey = this.apiKey;
        this.configuration.appVersion = this.appVersion
        this.configuration.autoNotify = this.autoNotify;
        this.configuration.releaseStage = this.releaseStage;
        this.bugsnag = new Client(this.configuration);
    }
    logMessage(error: string, reportedInfo) {
        this.bugsnag.notify(new Error(error), function (report) {
            report = reportedInfo;
        });
    }
    setUserInfo(userId = '100', userName = 'Jessica', userEmailId = 'abc@jdjsd.com') {
        this.bugsnag.setUser(userId, userName);
    }
    clearUserInfo = function clearUser() {
        this.bugsnag.clearUser()
    }
}