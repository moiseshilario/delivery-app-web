import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as ordersActions } from '../ducks/orders';
import { Creators as ErrorActions } from '../ducks/error';

export function* getOrders() {
  try {
    const response = yield call(api.get, '/orders');

    yield put(ErrorActions.hideError());
    yield put(ordersActions.getOrdersuccess(response.data));
  } catch (err) {
    yield put(ErrorActions.setError('User not found or wrong credentials'));
  }
}
