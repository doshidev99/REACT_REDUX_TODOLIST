import { combineReducers } from 'redux';
import todos from './todos/reducer';
import visibilityFilter from './filter/reducer';

export default combineReducers({
  todos,
  visibilityFilter,
});
