import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import storeReset from 'redux-reset';
import rootReducer from '../reducers'

/*
createStore is creating all stores defined in all reducers
Store is also exported for use in other files
*/

const enhancedStore = compose(
  applyMiddleware(thunk),
)(createStore);

const store = enhancedStore(rootReducer);

export default store;
