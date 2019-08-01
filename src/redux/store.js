import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducers';

const enhancers = [];

const store = createStore(rootReducer, composeWithDevTools(...enhancers));

export default store;
