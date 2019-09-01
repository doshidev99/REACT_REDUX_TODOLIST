import { setVisibilityFilterAction } from '../actions';

describe('Filter action', () => {
  it('should create an action to SET_VISIBILITY_FILTER', () => {
    expect(setVisibilityFilterAction('SHOW_ACTIVE')).toEqual({
      type: setVisibilityFilterAction.type,
      payload: 'SHOW_ACTIVE'
    });
  });
});
