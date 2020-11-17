import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import LogInContainer from '../components/sessions/log_in_container';

export const Root = ({store}) => (
  <Provider store={store}>
    <HashRouter>
      <LogInContainer />
    </HashRouter>
  </Provider>
)

export default Root;