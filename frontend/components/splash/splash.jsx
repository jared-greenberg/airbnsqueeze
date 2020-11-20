import React from 'react';
import SplashNavBar from '../nav/splash_nav_bar';
import NavBar from '../nav/nav_bar';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <>
      <SplashNavBar />
      <img id="splash-img" src={window.splashImg}/>
      <section className="slogan">
        <h1>Go Tiny</h1>
        <div className="link-wrapper">
          <Link className="splash-index-link" to="/listings">Explore tiny stays</Link>
        </div>
      </section>
    </>
  )
}