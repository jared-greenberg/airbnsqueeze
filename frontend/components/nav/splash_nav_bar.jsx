import React from 'react';
import DropDown from './drop_down'

export default () => {
  return (
    <nav className="splash-nav">
      <h1 id="logo">airbnsqueeze</h1>
      <section className="center-nav">
        <ul>
          <li><a id="center-link-1">Git Hub</a></li>
          <li><a id="center-link-2">Linked In</a></li>
        </ul>
      </section>

      <DropDown />
    </nav>
  )
}