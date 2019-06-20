import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as UserActions } from '../ducks/user';
import { Creators as ErrorActions } from '../ducks/error';

export function* login(action) {
  try {
    const response = yield call(api.post, '/users', { ...action.payload.credentials });

    yield put(UserActions.loginSuccess(response.data));
  } catch (err) {
    yield put(UserActions.loginError(err));
    yield put(ErrorActions.setError('It was not possible to retrieve the playlists'));
  }
}
