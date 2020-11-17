import React from 'react';
import ReactDOM from 'react-dom';
import * as Utils from './util/session_api_util';


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Hello</h1>, root);

  window.createUser = Utils.createUser;
  window.createSession = Utils.createSession;
  window.closeSession = Utils.closeSession;
})