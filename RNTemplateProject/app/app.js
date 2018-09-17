import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import RootComponent from './rootComponent';

/*
place all the initial states needs to be start with app.
*/
const initialState = {
  appVersion: '1.0.0',
  env: 'UAT/PROD',
  wsVersion: '<WS version',
  appBuildKey: '<application key>',
  appID: '<added appId if required>',
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
