import { all, takeLatest } from 'redux-saga/effects';

import { Types as OrderTypes } from '../ducks/orders';
import { Types as UserTypes } from '../ducks/user';

import { getOrders } from './orders';
import { login } from './user';

export default function* rootSaga() {
  yield all([takeLatest(UserTypes.LOGIN_REQUEST, login)]);
  yield all([takeLatest(OrderTypes.GET_REQUEST, getOrders)]);
}
