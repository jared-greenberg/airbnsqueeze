import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ModalContainer from '../components/modal/modal_container';
import NavBar from './nav/nav_bar';
import Splash from './splash/splash'
import ListingShowContainer from './listing/listing_show_container';
import ListingIndexContainer from './listing/listing_index_container';
import SearchFormContainer from './search/search_form_container';

const App = (props) => (
  <>
      <ModalContainer />
  
      
      <Switch>
        <Route exact path="/" component={Splash} />
        <Route path="/listings/:listingId" component={ListingShowContainer}/>
        <Route path="/listings" component={ListingIndexContainer} />
        <Route path="/search" component={SearchFormContainer} />
      </Switch>
  </>
)


export default App;

