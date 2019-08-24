import { createReducer } from 'redux-starter-kit';
import { setVisibilityFilterAction } from './actions';

const initialState = 'SHOW_ALL';

export const setVisibilityFilter = (state, { payload }) => payload;

export default createReducer(initialState, {
  [setVisibilityFilterAction.type]: setVisibilityFilter
});
