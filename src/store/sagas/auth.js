import { call, put } from 'redux-saga/effects';
import { actions as toastrActions } from 'react-redux-toastr';
import { push } from 'connected-react-router';
import api from '../../services/api';

import { Creators as AuthActions } from '../ducks/auth';
import { Creators as ErrorActions } from '../ducks/error';

export function* signIn(action) {
  const { email, password } = action.payload;
  try {
    const response = yield call(api.post, 'session', { email, password });

    localStorage.setItem('@DeliveryApp:token', response.data.token);
    yield put(AuthActions.signInSuccess(response.data.token));
    yield put(push('/orders'));
  } catch (err) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Falha no login',
        message: 'Verifique seu e-mail/senha',
      }),
    );
    yield put(ErrorActions.setError(err));
  }
}
