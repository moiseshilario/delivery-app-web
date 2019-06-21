import { combineReducers } from 'redux';
import { reducer as toastr } from 'react-redux-toastr';

import orders from './orders';
import auth from './auth';

export default combineReducers({
  auth,
  orders,
  toastr,
});
