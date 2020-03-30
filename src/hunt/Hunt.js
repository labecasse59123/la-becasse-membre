import React, {useCallback, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { find } from 'lodash';
import { reset } from 'redux-form';

import Layout from '../layout/Layout';
import { huntActions } from './redux';
import HunterCounter from './HunterCounter';
import HuntForm from './HuntForm';

export default function Hunt(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(huntActions.huntFetch());
  }, [dispatch]);

  const viewState = useSelector(state => {
    const { huntSessions } = state.hunt;
    const { user } = state.auth;
    
    const hunt = find(huntSessions, s => s.user && s.user.email === user.email);

    return {
      isRegistered: !!hunt,
      duration: !!hunt ? hunt.duration : 'day',
      huntCounter: huntSessions.length,
    }

  });

  const onSubmit = useCallback(values => {
    const { duration } = values;
    if (duration) {
      dispatch(huntActions.huntRegister(duration))
      .then(() => dispatch(reset('hunt')));
    } else {
      dispatch(huntActions.huntUnregister());
    }
  }, [dispatch]);
  
  return (
    <Layout title="La Bécasse - Inscription Chasse">
      <HunterCounter 
        {...viewState}
        {...props}
      />
      <HuntForm
        {...viewState}
        onSubmit={onSubmit}
        {...props}
      />
    </Layout>
  )
  
}
