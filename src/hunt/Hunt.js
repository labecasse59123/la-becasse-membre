import { connect } from 'react-redux';
import { find } from 'lodash';
import { reset } from 'redux-form';

import { huntActions } from './redux';
import HuntForm from './HuntForm';

const mapStateToProps = state => {
  const { user } = state.auth;
  const { huntSessions } = state.hunt;

  const hunt = find(huntSessions, s => s.user && s.user.email === user.email);
  
  if (hunt) {
    return {
      isRegistered: true,
      duration: hunt.duration,
    }
  }
  return {
    isRegistered: false,
    duration: 'day',
  }
};

const mapDispatchToProps = dispatch => {
  // onSubmit is given by redux-form HoC
  return {
    onSubmit: (values) => {
      const { duration } = values;
      console.log(values);
      if (duration) {
        dispatch(huntActions.huntRegister(duration))
        .then(() => dispatch(reset('hunt')));
      } else {
        dispatch(huntActions.huntUnregister());
      }
    },
    fetchHunt: () => {
      dispatch(huntActions.huntFetch());
    },
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HuntForm);
