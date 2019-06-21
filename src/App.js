import React from 'react';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';

import './config/ReactotronConfig';

import GlobalStyle from './styles/global';

import { Wrapper } from './styles/components';

import Routes from './routes';
import store from './store/index';

export default function App() {
  return (
    <Provider store={store}>
      <Wrapper>
        <GlobalStyle />
        <Routes />
        <ReduxToastr />
      </Wrapper>
    </Provider>
  );
}
