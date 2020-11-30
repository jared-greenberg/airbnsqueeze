import React from 'react';


export default () => {
  return (
    <footer id="all-page-footer">
      <div className="footer-list-container">
        <ul>
          <h3>About me</h3>
          <li><a>Git Hub</a></li>
          <li><a>Linked In</a></li>
          <li><a>Other Projects</a></li>
        </ul>
        <ul>
          <h3>Contact</h3>
          <li><a>Email</a></li>
          <li><a>Phone</a></li>
        </ul>
        <ul>
          <h3>Inspiration</h3>
          <li><a>Airbnb</a></li>
          <li><a>Tiny House Nation</a></li>
        </ul>
      </div>
      <div className="footer-tag-line">
        <h3 id="copyright">{'\u00A9'} 2020 Airbnsqueeze, Inc. All rights reserved</h3>
      </div>

    </footer>
  )
}