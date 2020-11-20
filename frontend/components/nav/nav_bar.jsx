import React from 'react';
import DropDown from './drop_down';
import { Link } from 'react-router-dom';

export default (props) => {
  const fixed = props.fixed ? "fixed-nav" : "";
  return (
    <nav className={`${fixed} normal-nav`}>
      <Link to="/"><h1 id="logo">airbnsqueeze</h1></Link>
      <button id="search-button">
        Start your search
        <div id="search-badge"><i className="fas fa-search"></i></div>
      </button>
      <DropDown />
    </nav>
  )
}
