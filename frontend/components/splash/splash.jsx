import React from 'react';
import SplashNavBar from '../nav/splash_nav_bar';
import SearchFormContainer from '../search/search_form_container';

import { Link } from 'react-router-dom';

export default () => {
  return (
    <>
      <SplashNavBar />
      <img id="splash-img" src={window.splashImg}/>
      <SearchFormContainer />
      <section className="slogan">
        <h1>Go Tiny</h1>
        <div className="link-wrapper">
          <Link className="splash-index-link" to="/listings">Explore tiny stays</Link>
        </div>
      </section>
    </>
  )
}