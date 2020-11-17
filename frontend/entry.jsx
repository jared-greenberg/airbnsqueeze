import React from 'react';
import ReactDOM from 'react-dom';
import {logIn, logOut, signUp} from './actions/session_actions';
import configureStore from './store/store'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();
  ReactDOM.render(<h1>Hello</h1>, root);

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.logIn = logIn;
  window.logOut = logOut;
  window.signUp = signUp;
})