import { combineReducers } from 'redux';

import orders from './orders';
import error from './error';
import user from './user';

export default combineReducers({
  orders,
  user,
  error,
});
