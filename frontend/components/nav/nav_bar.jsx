import React from 'react';
import DropDown from './drop_down';
import { Link } from 'react-router-dom';
import SearchFormContainer from '../search/search_form_container';
import { connect } from 'react-redux';
import {clearQuery} from '../../actions/query_actions';





class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {searching: false}
    this.openSearch = this.openSearch.bind(this);
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
  
 render() {
    const fixed = this.props.location.pathname === "/listings" ? "fixed-nav" : ""
    return (
      <header className={`${fixed}`}>
        <nav className="normal-nav">
          <Link to="/" onClick={this.props.clearQuery}><h1 id="logo">airbnsqueeze</h1></Link>

          {this.state.searching ? <div className="opened-search"><SearchFormContainer /></div> : (
            <button id="search-button" onClick={this.openSearch}>
              Start your search
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