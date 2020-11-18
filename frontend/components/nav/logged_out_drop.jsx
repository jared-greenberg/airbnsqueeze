import React from 'react';

export default ({openModal, toggleMenu}) => {
  return (
    <ul onBlur={toggleMenu}>
      <li onClick={()=>openModal("login")}>Log In</li>
      <li onClick={()=>openModal("signup")}>Sign Up</li>
    </ul>
  )
}