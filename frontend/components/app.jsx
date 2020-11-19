import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ModalContainer from '../components/modal/modal_container';
import NavBar from './nav/nav_bar';
import SplashNavBar from './nav/splash_nav_bar';
import Splash from './splash/splash'
import ListingShowContainer from './listing/listing_show_container';

const App = (props) => {
  debugger
return (
  <>
    <ModalContainer />
  
      <Route exact path="/" component={Splash} />
      <Route path="/:a(.+)" component={NavBar}/>
      <Route path="/listings/:listingId" component={ListingShowContainer}/>
  </>
)
}

export default App;

