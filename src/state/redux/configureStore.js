import { createStore, combineReducers } from 'redux';
import * as reducers from './reducers';
export const STATE_KEY = 'ArcticCircleState';

const reducer = combineReducers(reducers);

function configureStore() {
  const store = createStore(reducer);
  return store;
}
export default configureStore;
