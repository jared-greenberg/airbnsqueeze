import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import SignUpContainer from '../components/sessions/sign_up_container';

export const Root = ({store}) => (
  <Provider store={store}>
    <HashRouter>
      <SignUpContainer />
    </HashRouter>
  </Provider>
)

export default Root;