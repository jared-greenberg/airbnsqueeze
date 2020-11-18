import React from 'react';
import DropDown from './drop_down'

export default () => {
  return (
    <nav className="splash-nav">
      <img src="#" alt="Logo"/>
      <section className="center-nav">
        <ul>
          <li><a>Git Hub</a></li>
          <li><a>Linked In</a></li>
        </ul>
      </section>
      <DropDown />
    </nav>
  )
}