import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import storeReset from 'redux-reset';
import rootReducer from '../reducers';


export default function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(thunk)
  )
  return createStore(rootReducer, initialState, enhancer)
}
