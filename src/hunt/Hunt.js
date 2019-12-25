import { connect } from 'react-redux';

import { huntActions } from './redux';
import HuntForm from './HuntForm';

const mapStateToProps = state => {
  return {
    isRegistered: state.hunt.isRegistered,
    duration: state.hunt.duration,
  }
};

const mapDispatchToProps = dispatch => {
  // onSubmit is given by redux-form HoC
  return {
    onSubmit: (values) => {
      const { duration } = values;
      dispatch(huntActions.huntRegister(duration))
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HuntForm);
