import React from 'react';

export default ({openModal}) => {
  return (
    <ul className="drop-menu">
      <li>
        <a id="log-in-button" onClick={() => openModal("login")}>Log in</a>
      </li>
      <li>
        <a onClick={() => openModal("signup")}>Sign up</a>

      </li>
    </ul>
  )
}