import { makeConstantCreator, makeActionCreator } from '../../utils/reduxUtils';

export const FilterTypes = makeConstantCreator('SET_VISIBILITY_FILTER');

export const setVisibilityFilter = filter => makeActionCreator(FilterTypes.SET_VISIBILITY_FILTER, {
  filter,
});
