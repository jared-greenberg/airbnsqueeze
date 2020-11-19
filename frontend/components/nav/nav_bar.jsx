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
      <button id="search-button">
        Start your search
        <div id="search-badge"><i className="fas fa-search"></i></div>
      </button>
      <DropDown />
    </nav>
  )
}