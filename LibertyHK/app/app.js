import React from 'react';
import { Provider } from 'react-redux';
import store from './store/configureStore'
import RootComponent from './rootComponent'

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
