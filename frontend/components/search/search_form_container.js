import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchListings } from '../../actions/listing_actions';
import { startQuery } from '../../actions/query_actions';
import SearchForm from './search_form';


const mapStatetoProps = state => ({
  query: state.ui.query
})

const mapDispatchtoProps = dispatch => {
 return {
  fetchListings: (query) => dispatch(fetchListings(query)),
  startQuery: (query) => dispatch(startQuery(query)),
  clearQuery: () => dispatch(clearQuery())
}}

export default withRouter(connect(mapStatetoProps, mapDispatchtoProps)(SearchForm))