import React from 'react';
import { Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import history from './history';

import Private from './private';
import Guest from './guest';

import Login from '../pages/Login';
import Orders from '../pages/Orders';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Guest exact path="/login" component={Login} />
      <Private path="/" component={Orders} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
