import React from 'react';
import DropDown from './drop_down'

export default () => {
  return (
    <nav className="normal-nav">
      <h1 id="logo">airbnsqueeze</h1>
      <button id="search-button">
        Start your search
        <div id="search-badge"><i className="fas fa-search"></i></div>
      </button>
      <DropDown />
    </nav>
  )
}
