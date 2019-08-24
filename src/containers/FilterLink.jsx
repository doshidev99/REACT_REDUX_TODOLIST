import { connect } from 'react-redux';
import { setVisibilityFilterAction } from '../redux/filter/actions';
import Link from '../components/Link';

export default connect(
  (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter
  }),
  (dispatch, ownProps) => ({
    onClick: () => {
      dispatch(setVisibilityFilterAction(ownProps.filter));
    }
  })
)(Link);
