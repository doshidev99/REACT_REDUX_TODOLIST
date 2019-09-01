import reducer from '../reducer';
import { setVisibilityFilterAction } from '../actions';

describe('Filter reducer', () => {
  it('should handle SET_VISIBILITY_FILTER', () => {
    expect(
      reducer('SHOW_ALL', {
        type: setVisibilityFilterAction.type,
        payload: 'SHOW_ACTIVE'
      })
    ).toEqual('SHOW_ACTIVE');
  });
});
