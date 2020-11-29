import React from 'react';
import DropDown from './drop_down';
import { Link } from 'react-router-dom';
import SearchFormContainer from '../search/search_form_container';
import { connect } from 'react-redux';
import {clearQuery} from '../../actions/query_actions';
import {isEqual} from 'lodash';





class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {searching: false}
    this.openSearch = this.openSearch.bind(this);
    this.buttonText = this.buttonText.bind(this);
  }

  componentDidUpdate(prevProps){
    if (this.props.location.pathname !== prevProps.location.pathname){
      this.setState({searching: false})
    }
  }

  openSearch(e) {
    e.preventDefault();
    this.setState({searching: true});
 }

 buttonText(){
    const {query} = this.props;
    if ((query.location === "" && query.startDate === null && query.endDate === null && query.numGuests === 0) || (isEqual(query, {}))){
      return "Start you search";
    }
    else {
      return "Continue your search...";
    }
 }
  
 render() {
    const fixed = this.props.location.pathname === "/listings" ? "fixed-nav" : ""
    return (
      <header className={`${fixed}`}>
        <nav className="normal-nav">
          <Link id="nav-logo" to="/" onClick={this.props.clearQuery}>
            <img src={window.logoGreen} />
            <h1>airbnsqueeze</h1>
          </Link>

          {this.state.searching ? <div className="opened-search"><SearchFormContainer /></div> : (
            <button id="search-button" onClick={this.openSearch}>
              {this.buttonText()}
              <div id="search-badge"><i className="fas fa-search"></i></div>
            </button>
          )
          }
          <DropDown/>
        </nav>
      </header>
    )
  }
}

const mapStateToProps = state => ({
  query: state.ui.query
})
const mapDispatchToProps = dispatch => ({
  clearQuery: () => dispatch(clearQuery())
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);