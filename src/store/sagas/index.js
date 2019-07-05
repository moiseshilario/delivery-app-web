import { all, takeLatest } from 'redux-saga/effects';

import { Types as OrderTypes } from '../ducks/orders';
import { Types as UserTypes } from '../ducks/user';
import { Types as AuthTypes } from '../ducks/auth';

import { getOrders } from './orders';
import { login } from './user';
import { signIn, logout } from './auth';

export default function* rootSaga() {
  yield all([takeLatest(AuthTypes.SIGN_REQUEST, signIn)]);
  yield all([takeLatest(AuthTypes.LOGOUT, logout)]);
  yield all([takeLatest(UserTypes.LOGIN_REQUEST, login)]);
  yield all([takeLatest(OrderTypes.GET_REQUEST, getOrders)]);
}
