import React from 'react';
import DropDown from './drop_down'

export default () => {
  return (
    <nav className="splash-nav">
      <div id="nav-logo">
        <img src={window.logoWhite} /> 
        <h1 id="splash-title">airbnsqueeze</h1>
      </div>
      
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