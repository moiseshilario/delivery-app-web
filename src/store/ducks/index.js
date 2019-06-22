import { combineReducers } from 'redux';
import { reducer as toastr } from 'react-redux-toastr';
import { connectRouter } from 'connected-react-router';

import orders from './orders';
import auth from './auth';

export default history => combineReducers({
  router: connectRouter(history),
  auth,
  orders,
  toastr,
});
