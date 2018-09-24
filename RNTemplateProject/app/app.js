import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import RootComponent from './rootComponent';
import { AppConstant } from './appConstants';
import { strings } from './locales/Lang'

/*
place all the initial states needs to be start with app.
*/
const initialState = {
  appVersion: '1.0.0',
  env: 'UAT/PROD',
  wsVersion: '<WS version',
  appBuildKey: '<application key>',
  appID: '<added appId if required>',
  sideMenuList:[
    {
      id: AppConstant.menu.claimHistory,
      icon: 'clock',
      name: strings('menu.claimHistory')
    },
    {
      id: AppConstant.menu.myBenefits,
      icon: 'award',
      name: strings('menu.myBenefits')
    },
    {
      id: AppConstant.menu.preAdmission,
      icon: 'clipboard',
      name: strings('menu.preAdmission')
    },
    {
      id: AppConstant.menu.accountSettings,
      icon: 'settings',
      name: strings('menu.accountSettings')
    },
    {
      id: AppConstant.menu.changeLanguage,
      icon: 'globe',
      name: strings('menu.changeLanguage')
    },
    {
      id: AppConstant.menu.helpSupport,
      icon: 'help-circle',
      name: strings('menu.helpSupport')
    },
    {
      id: AppConstant.menu.logout,
      icon: 'log-out',
      name: strings('menu.logout')
    },
  ]
};
const store = configureStore({ initialState });
/*
Implement functionalities which needs to be called globally
while app is getting launched.
like,
Initate Handshake for push notification
Initite Handshake for Analytics
*/

export default () => (
  <Provider store={store}>
    {/* <StyleProvider > */}
    <RootComponent />
    {/* </StyleProvider> */}
  </Provider>
);
