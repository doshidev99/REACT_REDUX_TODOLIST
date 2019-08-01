import { FilterTypes } from './actions';
import { makeReducerCreator } from '../../utils/reduxUtils';

export const initialState = 'SHOW_ALL';

export const setVisibilityFilter = (state, { filter }) => filter;

export default makeReducerCreator(initialState, {
  [FilterTypes.SET_VISIBILITY_FILTER]: setVisibilityFilter,
});
