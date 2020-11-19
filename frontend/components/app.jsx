import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ModalContainer from '../components/modal/modal_container';
import NavBar from './nav/nav_bar';
import Splash from './splash/splash'
import ListingHeaderContainer from './listing/listing_header_container';

const App = () => (
  <>
    <ModalContainer />
    <NavBar />

    <Switch>
      <Route exact path="/" component={Splash} />
      <Route path="/listings/:listingId" component={ListingHeaderContainer}/>
    </Switch>
  </>
)

export default App;

