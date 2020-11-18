import React from 'react';

export default ({openModal}) => {
  return (
    <ul>
      <li >
        <a href="#" onClick={() => openModal("login")}>Log in</a>
      </li>
      <li>
        <a href="#" onClick={() => openModal("signup")}>Sign up</a>

      </li>
    </ul>
  )
}