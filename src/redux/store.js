import { configureStore } from 'redux-starter-kit';
import reducer from './rootReducers';

const enhancers = [];

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
  enhancers
});

export default store;
