import React from 'react';
import SplashNavBar from '../nav/splash_nav_bar';

export default () => {
  return (
    <>
      <SplashNavBar />
      <img id="splash-img" src={window.splashImg}/>
    </>
  )
}