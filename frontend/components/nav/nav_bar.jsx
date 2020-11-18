import React from 'react';
import DropDown from './drop_down'

export default () => {
  return (
    <nav className="splash-nav">
      <h1 id="logo">airbnsqueeze</h1>
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