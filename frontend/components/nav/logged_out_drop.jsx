import React from 'react';

export default ({openModal}) => {
  return (
    <ul className="drop-menu">
      <li>
        <a href="#" onClick={() => openModal("login")}>Log in</a>
      </li>
      <li>
        <a href="#" onClick={() => openModal("signup")}>Sign up</a>

      </li>
    </ul>
  )
}