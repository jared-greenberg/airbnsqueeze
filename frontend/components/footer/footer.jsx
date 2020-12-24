import React from 'react';


export default () => {
  return (
    <footer id="all-page-footer">
      <div className="footer-list-container">
        <ul>
          <h3>About me</h3>
          <li><a href="https://github.com/jared-greenberg" target="_blank">Github</a></li>
          <li><a href="https://www.linkedin.com/in/jared-p-greenberg" target="_blank">Linkedin</a></li>
          <li><a href="https://angel.co/u/jared-p-greenberg" target="_blank">AngelList</a></li>
          <li><a href="https://jared-greenberg.github.io" target="_blank">Personal Site</a></li>
        </ul>
        <ul>
          <h3>Contact</h3>
          <li><a href="mailto:jared.p.greenberg@gmail.com">jared.p.greenberg@gmail.com</a></li>
          <li><p>(845) 893-3853</p></li>
          <li><p>New York, NY</p></li>
        </ul>
         <ul>
          <h3>Other Projects</h3>
          <li><a href="https://jared-greenberg.github.io/rapid_rhapsodies" target="_blank">Rapid Rhapsodies</a></li>
          <li><a href="https://menutube.herokuapp.com" target="_blank">MenuTube</a></li>
        </ul>
        <ul>
          <h3>Inspiration</h3>
          <li><a href="https://www.airbnb.com" target="_blank">Airbnb</a></li>
          <li><a href="https://www.fyi.tv/shows/tiny-house-nation" target="_blank">Tiny House Nation</a></li>
        </ul>
      </div>
      <div className="footer-tag-line">
        <h3 id="copyright">{'\u00A9'} 2020 Airbnsqueeze, Inc. All rights reserved</h3>
      </div>

    </footer>
  )
}