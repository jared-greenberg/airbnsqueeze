import React from 'react';
import SplashNavBar from '../nav/splash_nav_bar';
import SearchFormContainer from '../search/search_form_container';
import {clearQuery} from '../../actions/query_actions';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Splash = (props) => {
  return (
    <>
      <SplashNavBar />
      <img id="splash-img" src={window.splashImg}/>
      <SearchFormContainer history={props.history} />
      <section className="slogan">
        <h1>Go Tiny</h1>
        <div className="link-wrapper">
          <Link className="splash-index-link" onClick={() => props.clearQuery()} to="/listings">Explore tiny stays</Link>
        </div>
      </section>
    </>
  )
}

const mapDispatchToProps = dispatch => ({
  clearQuery: () => dispatch(clearQuery())
})

export default connect(null, mapDispatchToProps)(Splash)