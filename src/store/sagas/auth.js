import { call, put } from 'redux-saga/effects';
import { actions as toastrActions } from 'react-redux-toastr';
import { push } from 'connected-react-router';
import api from '../../services/api';

import { Creators as AuthActions } from '../ducks/auth';
import { Creators as ErrorActions } from '../ducks/error';

export function* signIn(action) {
  const { email, password } = action.payload;
  try {
    const { data } = yield call(api.post, 'session', { email, password });
    if (data.user.admin) {
      const authData = {
        user: {
          name: data.user.name,
          email: data.user.email,
        },
        token: data.token,
      };
      localStorage.setItem('@DeliveryApp:token', authData.token);
      localStorage.setItem('@DeliveryApp:user', JSON.stringify(authData.user));
      yield put(AuthActions.signInSuccess(authData));
      yield put(push('/orders'));
    } else {
      yield put(
        toastrActions.add({
          type: 'error',
          title: 'Falha no login',
          message: 'Não autorizado',
        }),
      );
    }
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

export function* logout() {
  localStorage.removeItem('@DeliveryApp:token');
  localStorage.removeItem('@DeliveryApp:user');
  yield put(push('/login'));
}
