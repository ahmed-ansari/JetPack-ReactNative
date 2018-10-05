/**
 * This is interfsace for the Instrumentation
 * which list the methods to be implemented 
 * by the respective instrument libraty
 */
interface instrumentHandler {
    apiKey: string;
    autoNotify?: boolean;
    releaseStage?: string;
    userId?: string;
    userName?: string;
    userEmailId?: string;
    appVersion?: string;
    setUserInfo?: Function;
    logMessage?: boolean;
    clearUserInfo?: Function;
}