import ReactNative from 'react-native';
import I18n from 'react-native-i18n';

// Import all locales
import en from './en';
import es from './es';

// Should the app fallback to English if user locale doesn't exists
I18n.fallbacks = true; // If an english translation is not available in en.js, it will look inside hi.js
I18n.missingBehaviour = 'guess'; // It will convert HOME_noteTitle to "HOME note title" if the value of HOME_noteTitle doesn't exist in any of the translation files.
I18n.defaultLocale = 'en'; // If the current locale in device is not en or hi
I18n.locale = 'en'; // If we do not want the framework to use the phone's locale by default

// Define the supported translations
I18n.translations = {
  en,
  es,
};

const currentLocale = I18n.currentLocale();

export const setLocale = (locale) => {
  I18n.locale = locale;
};

export const getCurrentLocale = () => I18n.locale;

// Is it a RTL (Right to Left - arabic) language?
export const isRTL =
  currentLocale.indexOf('he') === 0 || currentLocale.indexOf('ar') === 0;

// Allow RTL alignment in RTL languages
ReactNative.I18nManager.allowRTL(isRTL);

// The method we'll use instead of a regular string
export function strings(name, params = {}) {
  return I18n.t(name, params);
}

// export default Lang;
